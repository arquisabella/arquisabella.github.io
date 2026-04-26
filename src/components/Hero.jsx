import { useEffect, useRef } from 'react'
import { profile } from '../data/projects'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // Divide el título en letras para animación stagger
    const title = titleRef.current
    if (!title) return
    const text = title.textContent
    title.innerHTML = text
      .split('')
      .map((ch, i) =>
        ch === ' '
          ? '<span class="hero__letter hero__letter--space"> </span>'
          : `<span class="hero__letter" style="animation-delay:${i * 0.04}s">${ch}</span>`
      )
      .join('')
  }, [])

  return (
    <section className="hero" id="inicio">
      {/* Textura de fondo */}
      <div className="hero__texture" aria-hidden="true" />

      {/* Línea decorativa vertical */}
      <div className="hero__line" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__meta reveal">
          <span className="hero__meta-tag">Arquitectura · Diseño · Guatemala</span>
        </div>

        <h1 className="hero__title" ref={titleRef}>
          Isabella Abadía
        </h1>

        <p className="hero__subtitle reveal reveal-delay-2">
          {profile.tagline}
        </p>

        <div className="hero__actions reveal reveal-delay-3">
          <a href="#proyectos" className="hero__btn hero__btn--primary" data-hover>
            Ver proyectos
          </a>
          <a href="#sobre-mi" className="hero__btn hero__btn--ghost" data-hover>
            Sobre mí
          </a>
        </div>
      </div>

      {/* Número decorativo */}
      <div className="hero__count" aria-hidden="true">
        <span>03</span>
        <span>proyectos</span>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
