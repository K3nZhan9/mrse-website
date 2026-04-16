import { Link } from 'react-router-dom'
import { CheckCircle, Target, Eye, Heart, Award, Users, Lightbulb, Shield } from 'lucide-react'

const milestones = [
  { year: '2019', title: '公司成立', desc: '河北玛仕知识产权服务有限公司（原河北果核数字科技有限公司）在保定正式成立，注册资本300万元' },
  { year: '2020', title: '业务拓展', desc: '专利代理业务快速增长，服务企业突破100家，建立完善的知识产权服务体系' },
  { year: '2021', title: '品牌升级', desc: '正式推出"玛仕知产"品牌，提供更专业的知识产权一站式服务' },
  { year: '2022', title: '规模扩张', desc: '服务范围拓展至高新技术企业认定、科技项目申报领域，成为综合性服务机构' },
  { year: '2023', title: '荣誉认可', desc: '荣获科技型中小企业认定，团队规模持续扩大，服务企业突破500家' },
  { year: '2024', title: '高新认定', desc: '荣获国家高新技术企业认定，服务企业突破1000家，业务覆盖全国' },
]

const team = [
  { name: '刘玉昆', title: '创始人 / 法定代表人', desc: '多年知识产权行业从业经验，擅长企业知识产权战略规划' },
  { name: '知产顾问团队', title: '专业顾问', desc: '拥有多名具备国家专利代理人资质的专业顾问，经验丰富' },
  { name: '项目申报团队', title: '项目管理', desc: '精通国家及省市级项目申报，成功率行业领先' },
  { name: '企业管理团队', title: '管理咨询', desc: '提供企业管理体系建设与优化的专业咨询服务' },
]

const values = [
  { icon: <Target size={28} />, title: '专注专业', desc: '深耕知识产权领域，持续提升专业能力' },
  { icon: <Eye size={28} />, title: '诚信透明', desc: '服务过程公开透明，费用明确无隐藏成本' },
  { icon: <Heart size={28} />, title: '客户至上', desc: '以客户利益为核心，提供贴心周到服务' },
  { icon: <Lightbulb size={28} />, title: '创新进取', desc: '紧跟行业发展，持续创新服务模式' },
]

const certifications = [
  { icon: <Award size={28} />, title: '高新技术企业', sub: '2024年获得认定' },
  { icon: <Shield size={28} />, title: '科技型中小企业', sub: '2024年获得认定' },
  { icon: <Users size={28} />, title: '玛仕标识旗下企业', sub: '品牌协同发展' },
  { icon: <CheckCircle size={28} />, title: '专业服务机构', sub: '专注知产领域5年+' },
]

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2540 0%, #1a3a5c 100%)',
        padding: '80px 0 60px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 13, color: '#c8a951', letterSpacing: 4, marginBottom: 16, fontWeight: 600 }}>ABOUT US</div>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>关于我们</h1>
          <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.9 }}>
            河北玛仕知识产权服务有限公司——您身边的知识产权专家
          </p>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 8 }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>首页</Link>
            <span style={{ color: '#475569', fontSize: 14 }}>/</span>
            <span style={{ color: '#c8a951', fontSize: 14 }}>关于我们</span>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="profile-grid">
            <div>
              <div style={{ fontSize: 13, color: '#c8a951', fontWeight: 600, letterSpacing: 3, marginBottom: 12 }}>COMPANY PROFILE</div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1a3a5c', marginBottom: 20, lineHeight: 1.3 }}>公司简介</h2>
              <div style={{ width: 50, height: 3, background: '#c8a951', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: '#475569', lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>
                河北玛仕知识产权服务有限公司（玛仕知产）成立于2019年3月21日，法定代表人为刘玉昆，注册资本300万元，是玛仕标识旗下企业。公司致力于打造全方位服务企业的知产公司。
              </p>
              <p style={{ color: '#475569', lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>
                公司位于保定市恒源西路888号3S双创社区孵化楼南侧工业楼A区2号，主要从事科学研究和技术服务业。现为国家认定的<strong style={{ color: '#1a3a5c' }}>高新技术企业（2024）</strong>和<strong style={{ color: '#1a3a5c' }}>科技型中小企业（2024）</strong>。
              </p>
              <p style={{ color: '#475569', lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
                公司主要负责高新相关业务，包括知识产权服务（专利、商标、版权）、企业管理咨询、科技项目申报等，服务覆盖河北全省及全国各地，累计服务企业超过1000家。
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link to="/contact" className="btn-primary">联系我们</Link>
                <Link to="/services" style={{
                  padding: '12px 32px', borderRadius: 4,
                  border: '2px solid #1a3a5c', color: '#1a3a5c',
                  textDecoration: 'none', fontWeight: 600, fontSize: 16
                }}>查看服务</Link>
              </div>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? '#1a3a5c' : '#f8fafc',
                    borderRadius: 16, padding: '28px 20px', textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(26,58,92,0.1)'
                  }}>
                    <div style={{ color: i % 2 === 0 ? '#c8a951' : '#1a3a5c', marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
                      {cert.icon}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: i % 2 === 0 ? '#fff' : '#1a3a5c', marginBottom: 6 }}>{cert.title}</div>
                    <div style={{ fontSize: 12, color: i % 2 === 0 ? '#94a3b8' : '#64748b' }}>{cert.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .profile-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">企业文化</h2>
          <div className="divider" />
          <p className="section-sub">以专业为基础，以诚信为准则，以创新为动力</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,58,92,0.1), rgba(37,99,168,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', color: '#1a3a5c'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1a3a5c', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">发展历程</h2>
          <div className="divider" />
          <p className="section-sub">砥砺前行，见证每一步成长</p>

          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 2, background: 'linear-gradient(#1a3a5c, #c8a951)',
              transform: 'translateX(-50%)', borderRadius: 1
            }} className="timeline-line" />

            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                paddingLeft: i % 2 === 0 ? 0 : '50%',
                paddingRight: i % 2 === 0 ? '50%' : 0,
                marginBottom: 40,
                position: 'relative'
              }} className="timeline-item">
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '50%', top: 24,
                  width: 16, height: 16, borderRadius: '50%',
                  background: '#c8a951', border: '3px solid #fff',
                  boxShadow: '0 0 0 3px #1a3a5c',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }} className="timeline-dot" />

                <div style={{
                  background: '#fff', borderRadius: 12,
                  padding: '20px 24px', width: 'calc(100% - 32px)',
                  boxShadow: '0 4px 20px rgba(26,58,92,0.1)',
                  marginLeft: i % 2 === 0 ? 0 : 16,
                  marginRight: i % 2 === 0 ? 16 : 0,
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    display: 'inline-block', background: '#1a3a5c',
                    color: '#c8a951', padding: '4px 12px', borderRadius: 20,
                    fontSize: 13, fontWeight: 700, marginBottom: 10
                  }}>{m.year}</div>
                  <h4 style={{ fontWeight: 700, color: '#1a3a5c', fontSize: 16, marginBottom: 8 }}>{m.title}</h4>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .timeline-line { left: 20px !important; }
            .timeline-item { padding-left: 44px !important; padding-right: 0 !important; justify-content: flex-start !important; }
            .timeline-dot { left: 20px !important; }
          }
        `}</style>
      </section>

      {/* Team */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className="section-title">核心团队</h2>
          <div className="divider" />
          <p className="section-sub">专业、敬业、高效的服务团队为您提供最优质的知识产权服务</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {team.map((member, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${['#1a3a5c', '#2563a8', '#c8a951', '#0f2540'][i]}, ${['#2563a8', '#1d4ed8', '#e6c96a', '#1a3a5c'][i]})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: 28, color: '#fff', fontWeight: 800
                }}>
                  {member.name.charAt(0)}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1a3a5c', marginBottom: 6 }}>{member.name}</h3>
                <p style={{ color: '#c8a951', fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{member.title}</p>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.8 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
