import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0f2540', color: '#cbd5e1', paddingTop: 60, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 42, height: 42, background: 'linear-gradient(135deg, #c8a951, #e6c96a)',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>玛仕</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>河北玛仕知识产权</div>
                <div style={{ fontSize: 11, color: '#94a3b8', letterSpacing: 2 }}>MASHI IP SERVICE</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: '#94a3b8' }}>
              专注知识产权服务十余年，为企业提供全方位知识产权解决方案，高新技术认定、项目申报一站式服务。
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              {['高新技术企业', '科技型中小企业'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 10px', borderRadius: 20,
                  background: 'rgba(200,169,81,0.15)', color: '#c8a951',
                  fontSize: 12, border: '1px solid rgba(200,169,81,0.3)'
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 16 }}>快速导航</h4>
            {[
              { to: '/', label: '网站首页' },
              { to: '/about', label: '关于我们' },
              { to: '/services', label: '产品服务' },
              { to: '/contact', label: '联系我们' },
            ].map(link => (
              <div key={link.to} style={{ marginBottom: 12 }}>
                <Link to={link.to} style={{
                  color: '#94a3b8', textDecoration: 'none', fontSize: 14,
                  transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6
                }}>
                  <span style={{ color: '#c8a951', fontSize: 10 }}>▶</span>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 16 }}>核心服务</h4>
            {['专利申请与保护', '商标注册代理', '高新技术企业认定', '科技项目申报', '企业管理咨询', '版权登记'].map(s => (
              <div key={s} style={{ marginBottom: 12 }}>
                <span style={{ color: '#94a3b8', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#c8a951', fontSize: 10 }}>▶</span>
                  {s}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 16 }}>联系方式</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} style={{ color: '#c8a951', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>
                  保定市恒源西路888号<br />3S双创社区孵化楼A区2号
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} style={{ color: '#c8a951', flexShrink: 0 }} />
                <a href="tel:0312-12345678" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>0312-12345678</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={16} style={{ color: '#c8a951', flexShrink: 0 }} />
                <a href="mailto:service@mashi-ip.com" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>service@mashi-ip.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Clock size={16} style={{ color: '#c8a951', flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#94a3b8' }}>周一至周五 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10
        }}>
          <p style={{ fontSize: 13, color: '#475569' }}>
            © 2024 河北玛仕知识产权服务有限公司 版权所有
          </p>
          <p style={{ fontSize: 13, color: '#475569' }}>
            冀ICP备XXXXXXXX号 | 统一社会信用代码：91130605MA0DBTCK84
          </p>
        </div>
      </div>
    </footer>
  )
}
