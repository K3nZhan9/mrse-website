import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const RESEND_API_KEY = "re_JWUTD3mV_NL2Y9NBueBQaPvjR9xZky8U2";
const TO_EMAIL = "13366425856@163.com";
const FROM_EMAIL = "onboarding@resend.dev";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

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
    const { name, phone, company, email, service, message } = body;

    if (!name || !phone || !service) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "缺少必填字段（姓名、电话、服务类型）" }),
      };
    }

    const htmlContent = `
      <div style="font-family: 'Microsoft YaHei', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #1a3a5c, #2563a8); color: white; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 20px;">📬 新的客户咨询</h1>
          <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">河北玛仕知识产权服务有限公司 - 官网咨询</p>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 12px 0; color: #64748b; width: 100px; vertical-align: top; font-weight: 600;">👤 姓名</td>
              <td style="padding: 12px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-weight: 600;">📱 电话</td>
              <td style="padding: 12px 0; color: #1e293b;">${phone}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-weight: 600;">🏢 公司</td>
              <td style="padding: 12px 0; color: #1e293b;">${company}</td>
            </tr>` : ""}
            ${email ? `<tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-weight: 600;">📧 邮箱</td>
              <td style="padding: 12px 0; color: #1e293b;">${email}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-weight: 600;">📋 服务</td>
              <td style="padding: 12px 0; color: #1e293b;">
                <span style="background: #e8f0fe; color: #1a3a5c; padding: 4px 12px; border-radius: 20px; font-size: 13px;">${service}</span>
              </td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 12px 0; color: #64748b; vertical-align: top; font-weight: 600;">💬 说明</td>
              <td style="padding: 12px 0; color: #1e293b; line-height: 1.8; white-space: pre-wrap;">${message}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; text-align: center;">
            此邮件由玛仕知产官网自动发送 · ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
          </div>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `【玛仕知产】新客户咨询 - ${name} - ${service}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "发送失败");
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "咨询已发送" }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || "服务器错误" }),
    };
  }
};
