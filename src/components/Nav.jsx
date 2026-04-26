import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí',  href: '#sobre-mi' },
    { label: 'Contacto',  href: '#contacto' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="nav__logo">
          <span className="nav__logo-name">Isabella Abadía</span>
          <span className="nav__logo-title">Arquitecta</span>
        </a>

        <ul className="nav__links">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/cv/isabella-abadia-cv.pdf" className="nav__cta" download>
              CV
            </a>
          </li>
        </ul>

        {/* Hamburger mobile */}
        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="nav__mobile">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="/cv/isabella-abadia-cv.pdf" className="nav__mobile-link" download>
          Descargar CV
        </a>
      </div>
    </nav>
  )
}
