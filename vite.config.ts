import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const FEISHU_APP_ID = 'cli_a9544caa4e639bd8'
const FEISHU_APP_SECRET = 'gzfYVifWaNNvfMpHJz0ExgnaD0SvGilM'
const FEISHU_APP_TOKEN = 'LF3YbS1fOaqPTWsWo4bcKLe1nRh'
const FEISHU_TABLE_ID = 'tblMqnYAwquMzMyQ'
const DEEPSEEK_API_KEY = 'sk-830498bcd4674c89b3d5c4ce368c43c8'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/feishu-api/proxy/records': {
        target: 'https://open.feishu.cn',
        changeOrigin: true,
        bypass: async (_req, res) => {
          if (!res) return undefined

          try {
            const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                app_id: FEISHU_APP_ID,
                app_secret: FEISHU_APP_SECRET,
              }),
            })
            const tokenData: any = await tokenRes.json()
            if (tokenData.code !== 0) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ code: -1, msg: '获取token失败' }))
              return false
            }
            const token = tokenData.tenant_access_token

            const allRecords: any[] = []
            let pageToken = ''
            let hasMore = true
            while (hasMore) {
              let url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_APP_TOKEN}/tables/${FEISHU_TABLE_ID}/records?page_size=500`
              if (pageToken) url += `&page_token=${encodeURIComponent(pageToken)}`

              const recordsRes = await fetch(url, {
                headers: { 'Authorization': `Bearer ${token}` },
              })
              const recordsData: any = await recordsRes.json()
              if (recordsData.code !== 0) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ code: -1, msg: '获取记录失败' }))
                return false
              }
              allRecords.push(...(recordsData.data.items || []))
              hasMore = recordsData.data.has_more || false
              pageToken = recordsData.data.page_token || ''
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: 0, data: allRecords }))
            return false
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: -1, msg: err.message || '未知错误' }))
            return false
          }
        },
      },
      '/deepseek-proxy': {
        target: 'https://api.deepseek.com',
        changeOrigin: true,
        bypass: async (req, res) => {
          if (!res || req.method !== 'POST') return undefined

          try {
            const bodyChunks: Buffer[] = []
            for await (const chunk of req) bodyChunks.push(chunk)
            const body = JSON.parse(Buffer.concat(bodyChunks).toString())
            const { company, industry, revenue } = body

            if (!company || !industry) {
              res.writeHead(400, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: '请提供企业名称和行业' }))
              return false
            }

            const dsRes = await fetch('https://api.deepseek.com/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
              },
              body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                  { role: 'system', content: '你是河北玛仕知识产权服务有限公司的AI政策匹配助手。严格返回纯JSON，不加markdown标记。根据企业信息匹配3-5个最相关政策，给出匹配度、补贴金额和申报难度。优先推荐河北及保定本地政策，兼顾国家级政策。JSON格式：{"company":"","industry":"","revenue":"","summary":"摘要","totalEstimate":"补贴范围","items":[{"name":"政策名","match":"90%","subsidy":"金额","difficulty":"低/中/高","description":"说明"}]}' },
                  { role: 'user', content: `企业信息：- 企业名称：${company}\n- 所属行业：${industry}\n- 年营收规模：${revenue || '未提供'}\n\n请为该企业生成政策匹配报告。` },
                ],
                temperature: 0.7,
                max_tokens: 2000,
              }),
            })

            const dsData: any = await dsRes.json()
            const content = dsData.choices?.[0]?.message?.content || ''
            const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
            let report = JSON.parse(cleanContent)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(report))
            return false
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: err.message || '生成报告失败' }))
            return false
          }
        },
      },
    },
  },
})
