import { Link } from 'react-router-dom'
import {
  Shield, Award, FileText, TrendingUp,
  ChevronRight, CheckCircle, Star, Users, Trophy, Briefcase,
  Sparkles, Zap, Target, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: <Shield size={36} />,
    title: '专利申请保护',
    desc: '发明专利、实用新型、外观设计，从撰写到授权全程专业代理，有效保护企业核心技术'
  },
  {
    icon: <Award size={36} />,
    title: '商标注册代理',
    desc: '国内外商标注册、驰名商标认定、商标异议与无效，专业团队全程跟进'
  },
  {
    icon: <Trophy size={36} />,
    title: '高新技术认定',
    desc: '高新技术企业认定、科技型中小企业评价，助力企业享受税收优惠政策'
  },
  {
    icon: <FileText size={36} />,
    title: '项目申报服务',
    desc: '国家及地方科技项目申报、专项资金申请，最大化企业获得政策支持'
  },
  {
    icon: <Briefcase size={36} />,
    title: '企业管理咨询',
    desc: '知识产权战略规划、企业管理体系建设，提升企业综合竞争力'
  },
  {
    icon: <TrendingUp size={36} />,
    title: '版权著作权登记',
    desc: '软件著作权、作品著作权登记，快速高效，保障企业创意成果'
  }
]

const stats = [
  { num: '7+', label: '服务年限' },
  { num: '1000+', label: '服务企业' },
  { num: '98%', label: '客户满意度' },
  { num: '5000+', label: '成功案例' },
]

const advantages = [
  '高新技术企业认证，专业实力有保障',
  '资深知识产权顾问团队，经验丰富',
  '一站式服务，从申请到维权全覆盖',
  '快速响应，48小时内出具方案',
  '收费透明，无隐形消费',
  '成功率高，专业撰写提升授权概率',
]

const news = [
  { date: '2024-12', title: '玛仕知产荣获2024年度高新技术企业认定', tag: '公司动态' },
  { date: '2024-11', title: '关于第四季度专利申请补贴政策解读', tag: '政策资讯' },
  { date: '2024-10', title: '如何通过知识产权布局保护企业核心竞争力', tag: '专业知识' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2540 0%, #1a3a5c 50%, #1d4ed8 100%)',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', right: -100, top: -100,
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', right: 100, top: 100,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(200,169,81,0.08)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', left: -80, bottom: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(255,255,255,0.02)', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(200,169,81,0.15)', border: '1px solid rgba(200,169,81,0.3)',
                padding: '6px 16px', borderRadius: 20, marginBottom: 24
              }}>
                <Star size={14} style={{ color: '#c8a951' }} />
                <span style={{ color: '#c8a951', fontSize: 13, fontWeight: 500 }}>高新技术企业 · 保定知产领航者</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800, color: '#fff', lineHeight: 1.3,
                marginBottom: 20
              }}>
                专业知识产权服务<br />
                <span style={{ color: '#c8a951' }}>护航企业创新发展</span>
              </h1>

              <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.9, marginBottom: 36, maxWidth: 500 }}>
                河北玛仕知识产权服务有限公司，成立于2019年，专注于专利申请、商标注册、高新技术企业认定、项目申报等知识产权全方位服务，累计服务千余家企业。
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">免费咨询</Link>
                <Link to="/services" className="btn-outline">了解服务</Link>
              </div>

              <div style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
                {stats.map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: '#c8a951', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-right">
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: 40,
                width: '100%',
                maxWidth: 400,
              }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 20, marginBottom: 24 }}>为什么选择玛仕知产</h3>
                {advantages.map((adv, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <CheckCircle size={18} style={{ color: '#c8a951', flexShrink: 0 }} />
                    <span style={{ color: '#cbd5e1', fontSize: 14 }}>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .hero-right { display: none !important; }
          }
        `}</style>
      </section>

      {/* AI Policy Radar Section */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #fefce8 0%, #fff7ed 50%, #fef3c7 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: -50, right: -50,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(200,169,81,0.08)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 250, height: 250, borderRadius: '50%',
          background: 'rgba(200,169,81,0.06)', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'center'
          }} className="radar-grid">
            {/* Left: Info */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(200,169,81,0.15)', border: '1px solid rgba(200,169,81,0.3)',
                padding: '6px 16px', borderRadius: 20, marginBottom: 20
              }}>
                <Sparkles size={14} style={{ color: '#b45309' }} />
                <span style={{ color: '#92400e', fontSize: 13, fontWeight: 600 }}>AI 智能分析 · 一键匹配</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800, color: '#1a3a5c', lineHeight: 1.3,
                marginBottom: 16
              }}>
                AI 政策雷达<br />
                <span style={{ color: '#b45309' }}>测测你的企业能拿多少补贴</span>
              </h2>

              <p style={{ color: '#57534e', fontSize: 15, lineHeight: 1.9, marginBottom: 28, maxWidth: 480 }}>
                输入企业基本信息，AI 智能分析匹配国家及地方政策，自动生成《政策匹配报告》，发现隐藏的补贴机会。
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  { icon: <Zap size={18} />, text: '覆盖国科小、高新、专精特新等 20+ 政策' },
                  { icon: <Target size={18} />, text: 'AI 智能匹配，30秒生成专属报告' },
                  { icon: <Sparkles size={18} />, text: '完全免费，无需注册' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(200,169,81,0.15)', color: '#b45309',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <span style={{ color: '#44403c', fontSize: 14, fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/policy-radar" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg, #b45309, #d97706)',
                color: '#fff', padding: '14px 32px', borderRadius: 12,
                fontWeight: 700, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(180,83,9,0.3)',
                transition: 'all 0.3s',
              }}>
                <Sparkles size={20} />
                免费政策匹配
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Preview card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                width: '100%',
                maxWidth: 420,
                border: '1px solid rgba(200,169,81,0.2)'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #1a3a5c, #2563a8)',
                  padding: '20px 24px',
                  color: '#fff'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <Sparkles size={20} style={{ color: '#c8a951' }} />
                    <span style={{ fontWeight: 700, fontSize: 16 }}>AI 政策匹配报告</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>Policy Match Report</div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#1a3a5c', fontWeight: 800, fontSize: 14
                    }}>示例</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#1e293b' }}>XX科技有限公司</div>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>制造业 · 年营收 2000 万</div>
                    </div>
                  </div>

                  {[
                    { match: '95%', name: '国家高新技术企业认定', sub: '税收减免 15%' },
                    { match: '88%', name: '河北省科技型中小企业', sub: '资金补贴 5-10 万' },
                    { match: '82%', name: '专精特新中小企业', sub: '资金补贴 20-50 万' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 0',
                      borderBottom: i < 2 ? '1px solid #f1f5f9' : 'none'
                    }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13, color: '#1e293b' }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: '#64748b' }}>{item.sub}</div>
                      </div>
                      <span style={{
                        padding: '4px 10px', borderRadius: 20,
                        background: item.match === '95%' ? '#dcfce7' : item.match === '88%' ? '#fef9c3' : '#fee2e2',
                        color: item.match === '95%' ? '#166534' : item.match === '88%' ? '#854d0e' : '#991b1b',
                        fontSize: 12, fontWeight: 700
                      }}>
                        匹配 {item.match}
                      </span>
                    </div>
                  ))}

                  <div style={{
                    marginTop: 20, padding: '16px',
                    background: 'linear-gradient(135deg, rgba(200,169,81,0.1), rgba(26,58,92,0.05))',
                    borderRadius: 12, textAlign: 'center'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#b45309', marginBottom: 4 }}>
                      预计可获补贴 <span style={{ fontSize: 28 }}>30-80</span> 万元
                    </div>
                    <div style={{ fontSize: 12, color: '#78716c' }}>* 实际金额以审批结果为准</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .radar-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">核心服务</h2>
          <div className="divider" />
          <p className="section-sub">一站式知识产权服务解决方案，从创造到保护到运用，全程专业护航</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a3a5c, #2563a8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', color: '#c8a951'
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1a3a5c', marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  color: '#1a3a5c', fontSize: 14, fontWeight: 500,
                  marginTop: 20, textDecoration: 'none'
                }}>
                  了解详情 <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #1a3a5c 0%, #2563a8 100%)',
                borderRadius: 16, padding: 40, color: '#fff'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {[
                    { num: '2019', label: '成立年份' },
                    { num: '300万', label: '注册资本' },
                    { num: '高新', label: '技术企业认定' },
                    { num: '保定', label: '服务覆盖全国' },
                  ].map(item => (
                    <div key={item.label} style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 12, padding: '20px 16px', textAlign: 'center'
                    }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: '#c8a951', marginBottom: 6 }}>{item.num}</div>
                      <div style={{ fontSize: 13, color: '#94a3b8' }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#c8a951', fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>ABOUT US</div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1a3a5c', marginBottom: 20, lineHeight: 1.3 }}>
                专注知产服务<br />赋能企业创新
              </h2>
              <div style={{ width: 50, height: 3, background: '#c8a951', borderRadius: 2, marginBottom: 24 }} />
              <p style={{ color: '#64748b', lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>
                河北玛仕知识产权服务有限公司（玛仕知产）成立于2019年3月，是一家集知识产权申请、维权、运营、咨询及企业管理于一体的综合性服务机构。
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
                公司位于保定市恒源西路888号3S双创社区，现为国家认定高新技术企业和科技型中小企业，拥有专业顾问团队，服务覆盖河北全省及全国各地。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {['专利 · 商标 · 版权 一站式服务', '高新认定 · 项目申报 全程辅导', '企业管理咨询 · 知产战略规划'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={18} style={{ color: '#c8a951' }} />
                    <span style={{ color: '#475569', fontSize: 15 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">了解更多</Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Process Section */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">服务流程</h2>
          <div className="divider" />
          <p className="section-sub">标准化、规范化服务流程，让您的每一步都清晰可见</p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 0, flexWrap: 'wrap' }}>
            {[
              { step: '01', title: '免费咨询', desc: '了解需求\n初步评估' },
              { step: '02', title: '方案制定', desc: '专业分析\n定制方案' },
              { step: '03', title: '签约委托', desc: '明确服务\n签订合同' },
              { step: '04', title: '专业执行', desc: '材料准备\n提交申请' },
              { step: '05', title: '跟踪反馈', desc: '实时跟进\n及时沟通' },
              { step: '06', title: '成果交付', desc: '证书获取\n后续维护' },
            ].map((item, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', width: 130 }}>
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a3a5c, #2563a8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px', position: 'relative'
                  }}>
                    <span style={{ color: '#c8a951', fontWeight: 800, fontSize: 18 }}>{item.step}</span>
                  </div>
                  <div style={{ fontWeight: 700, color: '#1a3a5c', fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.desc}</div>
                </div>
                {i < arr.length - 1 && (
                  <ChevronRight size={24} style={{ color: '#c8a951', margin: '0 4px', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">新闻动态</h2>
          <div className="divider" />
          <p className="section-sub">了解最新知识产权政策与公司动态</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {news.map((n, i) => (
              <div key={i} className="card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: 20,
                    background: '#f0f4f8', color: '#1a3a5c',
                    fontSize: 12, fontWeight: 500
                  }}>{n.tag}</span>
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>{n.date}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 16, color: '#1e293b', lineHeight: 1.6, marginBottom: 16 }}>{n.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#1a3a5c', fontSize: 13 }}>
                  <span>查看详情</span><ChevronRight size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2540, #1a3a5c)',
        padding: '80px 0', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <Users size={48} style={{ color: '#c8a951', margin: '0 auto 20px' }} />
          <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
            立即开始您的知识产权保护之路
          </h2>
          <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 36, lineHeight: 1.8 }}>
            免费咨询专业顾问，获取定制化知识产权解决方案。<br />
            我们承诺48小时内响应，为您的企业创新保驾护航。
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">立即免费咨询</Link>
            <a href="tel:19912123125" className="btn-outline">电话：19912123125</a>
          </div>
        </div>
      </section>
    </div>
  )
}
