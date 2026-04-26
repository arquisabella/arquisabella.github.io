import { profile } from '../data/projects'
import './About.css'

export default function About() {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="about__bg-accent" aria-hidden="true" />

      <div className="container">
        <div className="about__layout">

          {/* Columna izquierda: foto + datos + CV */}
          <div className="about__left">
            <div className="about__photo-wrap reveal">
              <div className="about__photo-frame" aria-hidden="true" />
              {profile.photo
                ? <img src={profile.photo} alt="Isabella Abadía Morales" className="about__photo" />
                : (
                  <div className="about__photo about__photo--placeholder">
                    <span>Isabella Abadía</span>
                  </div>
                )}
            </div>

            <div className="about__quick reveal reveal-delay-2">
              <div className="about__quick-item">
                <span>Base</span>
                <strong>Guatemala</strong>
              </div>
              <div className="about__quick-item">
                <span>Enfoque</span>
                <strong>Arquitectura orgánica</strong>
              </div>
              <div className="about__quick-item">
                <span>Etapa</span>
                <strong>Estudiante avanzada</strong>
              </div>
            </div>

            <a
              href={profile.cv}
              className="about__cv-btn reveal reveal-delay-3"
              download
              data-hover
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v10M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Descargar CV
            </a>
          </div>

          {/* Columna derecha: bio + software */}
          <div className="about__right">
            <header className="reveal">
              <span className="section-label">Sobre mí</span>
              <h2 className="section-title">
                Diseño espacios<br />
                <em>que respiran</em>
              </h2>
              <div className="section-line" />
            </header>

            <div className="about__bio reveal reveal-delay-1">
              {profile.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Software con nivel descriptivo */}
            <div className="about__skills reveal reveal-delay-2">
              <h3 className="about__skills-title">Software</h3>
              <div className="about__software-list">
                {profile.software.map((sw) => (
                  <div key={sw.name} className="skill-item">
                    <div className="skill-item__header">
                      <span className="skill-item__name">{sw.name}</span>
                      <span className={`skill-item__badge skill-item__badge--${sw.level.toLowerCase()}`}>
                        {sw.level}
                      </span>
                    </div>
                    {sw.skills && (
                      <p className="skill-item__desc">{sw.skills}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
