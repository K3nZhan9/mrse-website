import { Link } from 'react-router-dom'
import {
  Shield, Award, FileText, TrendingUp,
  ChevronRight, CheckCircle, Star, Users, Trophy, Briefcase
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
            <a href="tel:0312-12345678" className="btn-outline">电话：0312-12345678</a>
          </div>
        </div>
      </section>
    </div>
  )
}
