import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我们' },
  { to: '/services', label: '产品服务' },
  { to: '/client', label: '客户中心' },
  { to: '/contact', label: '联系我们' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', boxShadow: '0 2px 12px rgba(26,58,92,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 72, justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 42, height: 42, background: 'linear-gradient(135deg, #1a3a5c, #2563a8)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: '#c8a951', fontWeight: 800, fontSize: 18, letterSpacing: -1 }}>玛仕</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#1a3a5c', lineHeight: 1.2 }}>河北玛仕知识产权</div>
            <div style={{ fontSize: 11, color: '#64748b', letterSpacing: 2 }}>MASHI IP SERVICE</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: '8px 20px',
                borderRadius: 4,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
                color: location.pathname === link.to ? '#1a3a5c' : '#475569',
                background: location.pathname === link.to ? '#f0f4f8' : 'transparent',
                borderBottom: location.pathname === link.to ? '2px solid #c8a951' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            marginLeft: 16, padding: '8px 20px',
            background: '#1a3a5c', color: '#fff', borderRadius: 4,
            textDecoration: 'none', fontSize: 14, fontWeight: 500,
            transition: 'background 0.2s'
          }}>
            <Phone size={15} />
            免费咨询
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#1a3a5c' }}
          className="mobile-menu-btn"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '16px 24px' }} className="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                color: location.pathname === link.to ? '#1a3a5c' : '#475569',
                fontWeight: location.pathname === link.to ? 700 : 400,
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9',
                fontSize: 16,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
