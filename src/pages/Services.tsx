import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Award, FileText, TrendingUp, Briefcase, BookOpen, ChevronRight, CheckCircle } from 'lucide-react'

const categories = ['全部服务', '知识产权', '高新认定', '项目申报', '企业管理']

const services = [
  {
    category: '知识产权',
    icon: <Shield size={32} />,
    title: '发明专利申请',
    desc: '针对产品、工艺或方法等技术创新申请发明专利，保护期20年，技术含量最高的专利类型。',
    features: ['专业撰写权利要求书', '全程代理审查答复', '实质审查跟踪指导', '专利授权后维护'],
    price: '专利申请代理费用面议',
    badge: '核心业务',
    badgeColor: '#1a3a5c',
  },
  {
    category: '知识产权',
    icon: <Shield size={32} />,
    title: '实用新型专利',
    desc: '针对产品结构、形状或组合的技术方案，授权快（约1年），保护期10年，性价比高。',
    features: ['快速审查通道', '专业文件撰写', '无效预警分析', '批量申请优惠'],
    price: '高性价比专利保护方案',
    badge: '推荐',
    badgeColor: '#c8a951',
  },
  {
    category: '知识产权',
    icon: <Award size={32} />,
    title: '商标注册代理',
    desc: '提供国内外商标注册、驰名商标认定、商标续展、商标转让等全方位商标服务。',
    features: ['商标可注册性分析', '类别精准选择建议', '官方审查驳回应对', '商标监控预警服务'],
    price: '品牌保护全套方案',
    badge: '热门',
    badgeColor: '#e11d48',
  },
  {
    category: '知识产权',
    icon: <BookOpen size={32} />,
    title: '版权著作权登记',
    desc: '软件著作权、美术作品、文字作品、音乐作品等各类著作权登记，快速高效。',
    features: ['软件著作权登记', '作品著作权保护', '版权质押融资', '授权许可管理'],
    price: '著作权登记服务',
    badge: '',
    badgeColor: '',
  },
  {
    category: '高新认定',
    icon: <Award size={32} />,
    title: '高新技术企业认定',
    desc: '辅助企业获得国家高新技术企业认定资格，享受15%优惠税率，有效期3年，可循环认定。',
    features: ['资质预评估诊断', '研发费用归集辅导', '知识产权精准布局', '全程材料撰写', '答辩辅导支持'],
    price: '税收优惠高达数百万元',
    badge: '明星业务',
    badgeColor: '#1a3a5c',
  },
  {
    category: '高新认定',
    icon: <Shield size={32} />,
    title: '科技型中小企业认定',
    desc: '助力中小企业获得科技型中小企业认定，享受研发费用175%加计扣除政策优惠。',
    features: ['入库条件评估', '申报材料整理', '系统填报指导', '证书领取跟进'],
    price: '研发加计扣除政策',
    badge: '',
    badgeColor: '',
  },
  {
    category: '项目申报',
    icon: <FileText size={32} />,
    title: '国家级项目申报',
    desc: '国家自然科学基金、国家重点研发计划、工业强基等国家级项目的申报服务。',
    features: ['政策精准匹配', '可行性报告撰写', '专家评审沟通', '项目结项验收'],
    price: '政策扶持资金申请',
    badge: '高价值',
    badgeColor: '#c8a951',
  },
  {
    category: '项目申报',
    icon: <TrendingUp size={32} />,
    title: '省市级项目申报',
    desc: '河北省及保定市各类科技项目、专项资金、创新奖励申报代理，本地资源丰富。',
    features: ['政策动态实时推送', '申报材料撰写', '现场答辩辅导', '全周期跟踪服务'],
    price: '地方政策精准匹配',
    badge: '推荐',
    badgeColor: '#c8a951',
  },
  {
    category: '企业管理',
    icon: <Briefcase size={32} />,
    title: '知识产权战略规划',
    desc: '为企业量身制定知识产权战略，构建专利防护体系，提升企业核心竞争力。',
    features: ['知产现状诊断评估', '竞争对手专利分析', '专利布局策略制定', '定期评估优化'],
    price: '企业知产战略顾问',
    badge: '',
    badgeColor: '',
  },
  {
    category: '企业管理',
    icon: <TrendingUp size={32} />,
    title: '企业管理咨询',
    desc: '提供企业管理体系建设、ISO认证辅导、内部管理流程优化等管理咨询服务。',
    features: ['ISO质量管理体系', '企业制度设计', '流程优化再造', '管理培训服务'],
    price: '企业管理全面升级',
    badge: '',
    badgeColor: '',
  },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('全部服务')

  const filtered = activeCategory === '全部服务'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <div>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2540 0%, #1a3a5c 100%)',
        padding: '80px 0 60px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 13, color: '#c8a951', letterSpacing: 4, marginBottom: 16, fontWeight: 600 }}>OUR SERVICES</div>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>产品服务</h1>
          <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.9 }}>
            全方位知识产权服务解决方案，护航企业创新发展
          </p>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 8 }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>首页</Link>
            <span style={{ color: '#475569', fontSize: 14 }}>/</span>
            <span style={{ color: '#c8a951', fontSize: 14 }}>产品服务</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px', borderRadius: 30, border: 'none',
                  fontSize: 14, fontWeight: 500, cursor: 'pointer',
                  background: activeCategory === cat ? '#1a3a5c' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#475569',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(26,58,92,0.3)' : '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {filtered.map((service, i) => (
              <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {service.badge && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: service.badgeColor, color: '#fff',
                    padding: '3px 12px', borderRadius: 20,
                    fontSize: 12, fontWeight: 600
                  }}>{service.badge}</div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 12,
                    background: 'linear-gradient(135deg, #1a3a5c, #2563a8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#c8a951', flexShrink: 0
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>{service.category}</div>
                    <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1a3a5c' }}>{service.title}</h3>
                  </div>
                </div>

                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{service.desc}</p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, marginBottom: 20 }}>
                  {service.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <CheckCircle size={15} style={{ color: '#c8a951', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: 13 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: '#f8fafc', borderRadius: 8, padding: '10px 16px',
                  fontSize: 13, color: '#1a3a5c', fontWeight: 600, marginBottom: 20
                }}>
                  💡 {service.price}
                </div>

                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  background: '#1a3a5c', color: '#fff', textDecoration: 'none',
                  padding: '10px', borderRadius: 6, fontWeight: 500, fontSize: 14,
                  transition: 'background 0.2s'
                }}>
                  立即咨询 <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">服务优势</h2>
          <div className="divider" />
          <p className="section-sub">专业、高效、透明，是我们对每一位客户的承诺</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {[
              {
                num: '01', title: '专业团队保障',
                desc: '拥有具备国家专利代理人资质的专业顾问团队，深耕知识产权领域多年，经验丰富，专业可靠。'
              },
              {
                num: '02', title: '高通过率承诺',
                desc: '凭借丰富的项目经验和专业的文件撰写能力，专利申请通过率和高新认定成功率行业领先。'
              },
              {
                num: '03', title: '全程透明服务',
                desc: '服务进度实时可查，费用明确无隐藏，每个阶段都有专属顾问跟进，让您放心委托。'
              },
              {
                num: '04', title: '本地资源丰富',
                desc: '深耕保定及河北市场多年，与政府相关部门保持良好合作关系，项目申报具有明显优势。'
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: i === 0 ? '#1a3a5c' : '#f8fafc',
                borderRadius: 16, padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(26,58,92,0.08)'
              }}>
                <div style={{
                  fontSize: 36, fontWeight: 800,
                  color: i === 0 ? 'rgba(200,169,81,0.3)' : 'rgba(26,58,92,0.1)',
                  marginBottom: 16, lineHeight: 1
                }}>{item.num}</div>
                <h3 style={{
                  fontWeight: 700, fontSize: 18,
                  color: i === 0 ? '#fff' : '#1a3a5c',
                  marginBottom: 12
                }}>{item.title}</h3>
                <p style={{
                  color: i === 0 ? '#94a3b8' : '#64748b',
                  fontSize: 14, lineHeight: 1.8
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2540, #1a3a5c)',
        padding: '60px 0', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
            有疑问？免费咨询我们的专家
          </h2>
          <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 32 }}>
            专业顾问在线为您解答，提供最适合您企业的知识产权解决方案
          </p>
          <Link to="/contact" className="btn-primary">立即免费咨询</Link>
        </div>
      </section>
    </div>
  )
}
