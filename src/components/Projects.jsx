import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useFBX, Environment, ContactShadows } from '@react-three/drei'
import { projects } from '../data/projects'
import './Projects.css'

/* ── Placeholder cuando no hay imagen ── */
function ImagePlaceholder({ label }) {
  return (
    <div className="img-placeholder">
      <span>{label}</span>
    </div>
  )
}

/* ── Visor 3D — recibe distancia de cámara configurable ── */
function ModelViewer({ src, distance = 5 }) {
  if (!src) return null
  const ext = src.split('.').pop().toLowerCase()
  const d = distance

  function Model() {
    try {
      if (ext === 'fbx') {
        const fbx = useFBX(src)
        return <primitive object={fbx} scale={0.01} />
      }
      const { scene } = useGLTF(src)
      return <primitive object={scene} scale={1} />
    } catch {
      return null
    }
  }

  return (
    <div className="model-viewer">
      <p className="model-viewer__label">Modelo 3D · arrastra para rotar · scroll para zoom</p>
      <Canvas camera={{ position: [d * 0.6, d * 0.4, d], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="sunset" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} />
      </Canvas>
    </div>
  )
}

/* ── Modal de proyecto ── */
function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const [tab, setTab] = useState('gallery')

  const total = project.images.length
  const prev = () => setActiveImg(i => (i - 1 + total) % total)
  const next = () => setActiveImg(i => (i + 1) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <span /><span />
        </button>

        <div className="modal__layout">
          {/* Panel izquierdo: imagen / 3D */}
          <div className="modal__media">
            {project.model3d && (
              <div className="modal__tabs">
                <button
                  className={`modal__tab ${tab === 'gallery' ? 'active' : ''}`}
                  onClick={() => setTab('gallery')}
                >Galería</button>
                <button
                  className={`modal__tab ${tab === '3d' ? 'active' : ''}`}
                  onClick={() => setTab('3d')}
                >Modelo 3D</button>
              </div>
            )}

            {tab === 'gallery' ? (
              <>
                {/* Imagen principal con flechas */}
                <div className="modal__main-img">
                  {project.images[activeImg]
                    ? <img src={project.images[activeImg]} alt={`${project.title} ${activeImg + 1}`} />
                    : <ImagePlaceholder label={`Imagen ${activeImg + 1}`} />}

                  {total > 1 && (
                    <>
                      <button className="modal__nav modal__nav--prev" onClick={prev} aria-label="Anterior">‹</button>
                      <button className="modal__nav modal__nav--next" onClick={next} aria-label="Siguiente">›</button>
                      <div className="modal__counter">{activeImg + 1} / {total}</div>
                    </>
                  )}
                </div>

                {/* Thumbnails — scroll horizontal si hay muchos */}
                {total > 1 && (
                  <div className="modal__thumbs">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        className={`modal__thumb ${i === activeImg ? 'active' : ''}`}
                        onClick={() => setActiveImg(i)}
                        aria-label={`Imagen ${i + 1}`}
                      >
                        {img
                          ? <img src={img} alt={`thumb ${i + 1}`} />
                          : <ImagePlaceholder label={i + 1} />}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <ModelViewer
                src={project.model3d}
                distance={project.cameraDistance ?? 5}
              />
            )}
          </div>

          {/* Panel derecho: info */}
          <div className="modal__info">
            <p className="modal__category">{project.subtitle}</p>
            <h2 className="modal__title">{project.title}</h2>

            <div className="modal__meta-grid">
              <div><span>Año</span><strong>{project.year}</strong></div>
              <div><span>Lugar</span><strong>{project.location}</strong></div>
              <div><span>Área</span><strong>{project.area}</strong></div>
            </div>

            <p className="modal__desc">{project.description}</p>

            <div className="modal__tags">
              {project.tags.map(tag => (
                <span key={tag} className="modal__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Card — número con padding para 10+ proyectos ── */
function ProjectCard({ project, index, onClick }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <article
      className="project-card reveal"
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
      onClick={onClick}
      data-hover
    >
      <div className="project-card__img-wrap">
        {project.cover
          ? <img src={project.cover} alt={project.title} loading="lazy" />
          : <ImagePlaceholder label={project.title} />}
        <div className="project-card__overlay">
          <span className="project-card__view">Ver proyecto →</span>
        </div>
      </div>

      <div className="project-card__info">
        <span className="project-card__num">{num}</span>
        <div>
          <p className="project-card__cat">{project.subtitle}</p>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  )
}

/* ── Sección principal ── */
export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-label">Portafolio</span>
          <h2 className="section-title">Proyectos</h2>
          <div className="section-line" />
        </header>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
