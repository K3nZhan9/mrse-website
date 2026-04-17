import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const DEEPSEEK_API_KEY = "sk-830498bcd4674c89b3d5c4ce368c43c8";
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const SYSTEM_PROMPT = `你是河北玛仕知识产权服务有限公司的AI政策匹配助手。你的任务是根据企业信息，精准匹配国家及地方政策，生成一份《政策匹配报告》。

你需要严格按照以下JSON格式返回结果，不要返回任何其他内容：
{
  "company": "企业名称",
  "industry": "行业",
  "revenue": "营收",
  "summary": "AI分析摘要（2-3句话概括企业政策匹配情况）",
  "totalEstimate": "预计可获补贴总金额范围（如 20-50万元）",
  "items": [
    {
      "name": "政策名称",
      "match": "匹配度百分比（如 90%）",
      "subsidy": "预计补贴金额或优惠（如 税收减免15%/资金补贴20-50万）",
      "difficulty": "申报难度（低/中/高）",
      "description": "政策简要说明（1-2句话）"
    }
  ]
}

匹配策略：
1. 根据行业匹配相关政策（如制造业重点匹配智能制造、技改补贴等）
2. 根据营收规模判断适合的申报层级（国科小/高新/专精特新等）
3. 每次匹配3-5个最相关的政策
4. 匹配度要合理分布（不要全部90%以上）
5. 补贴金额参考真实政策标准
6. 优先推荐河北及保定本地政策，兼顾国家级政策

你熟悉的政策包括但不限于：
- 国家高新技术企业认定（税收减免15%）
- 科技型中小企业评价（资金补贴）
- 专精特新中小企业/小巨人（资金补贴20-50万）
- 河北省省级科技计划项目
- 保定市科技创新券
- 知识产权贯标
- 研发费用加计扣除
- 技术转移转化补贴
- 创新创业大赛奖励
- 工业设计中心认定
- 各类人才计划配套
- 首台套/首版次补贴
- 绿色工厂/绿色制造
- 两化融合贯标
- 工业互联网平台
- 中小企业发展专项资金

重要：只返回JSON，不要加任何markdown代码块标记。`;

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { company, industry, revenue } = body;

    if (!company || !industry) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "请提供企业名称和行业" }),
      };
    }

    const userPrompt = `企业信息：
- 企业名称：${company}
- 所属行业：${industry}
- 年营收规模：${revenue || "未提供"}

请为该企业生成政策匹配报告。`;

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`DeepSeek API 错误: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    // 尝试解析 JSON
    let report;
    try {
      // 清理可能的 markdown 代码块标记
      const cleanContent = content
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      report = JSON.parse(cleanContent);
    } catch {
      // 如果 JSON 解析失败，尝试提取 JSON 部分
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        report = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("AI 返回的数据格式异常，请重试");
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(report),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || "生成报告失败" }),
    };
  }
};
