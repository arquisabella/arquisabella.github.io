import { profile } from '../data/projects'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left reveal">
            <span className="section-label">Contacto</span>
            <h2 className="contact__title">
              Hablemos de<br />
              <em>tu próximo espacio</em>
            </h2>
            <p className="contact__sub">
              Siempre abierta a colaboraciones, proyectos académicos
              y conversaciones sobre arquitectura.
            </p>
          </div>

          <div className="contact__right reveal reveal-delay-2">
            <a href={`mailto:${profile.email}`} className="contact__email" data-hover>
              {profile.email}
            </a>

            <div className="contact__social">
              {profile.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener" className="contact__social-link" data-hover>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener" className="contact__social-link" data-hover>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="3"/>
                    <path d="M7 10v7M7 7v.01M12 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4M12 10v7"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>

            <a href={profile.cv} className="contact__cv" download data-hover>
              <span>Descargar CV completo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v10M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact__footer">
          <p className="contact__copy">
            © {new Date().getFullYear()} Isabella Abadía Morales
          </p>
          <p className="contact__made">
            Hecho con amor ♥
          </p>
        </div>
      </div>
    </section>
  )
}
