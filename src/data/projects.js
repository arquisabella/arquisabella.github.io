/**
 * ============================================================
 *  DATOS DE PROYECTOS — editar aquí para agregar o modificar
 * ============================================================
 *
 * Para agregar un nuevo proyecto:
 * 1. Crea una carpeta en: public/images/projects/proyecto-N/
 * 2. Agrega las imágenes (cover.jpg, img-1.jpg, img-2.jpg, ...)
 *    → Puedes poner TANTAS imágenes como quieras, no hay límite.
 * 3. (Opcional) Agrega modelo 3D en: public/models/proyecto-N.fbx
 * 4. Copia el bloque de abajo y rellena los campos
 *
 * Campos disponibles:
 *   id             → identificador único (string, sin espacios)
 *   title          → nombre del proyecto
 *   subtitle       → categoría o tipología
 *   year           → año
 *   location       → ciudad / país
 *   area           → metros cuadrados (string, ej: "320 m²")
 *   tags           → lista de etiquetas (array de strings)
 *   description    → descripción larga del proyecto
 *   cover          → imagen principal (ruta desde /public)
 *   images         → lista de imágenes de galería (sin límite)
 *   model3d        → ruta al archivo .fbx o .glb (null si no hay)
 *   cameraDistance → distancia inicial de la cámara en el visor 3D
 *                    Guía rápida:
 *                      2–3   → objeto pequeño (mueble, detalle)
 *                      5     → vivienda unifamiliar (valor por defecto)
 *                      10–15 → edificio mediano / equipamiento
 *                      25–40 → conjunto urbano o campus
 *   featured       → true = aparece destacado
 * ============================================================
 */

export const projects = [
  {
    id: "proyecto-1",
    title: "Casa Tierra",
    subtitle: "Vivienda Unifamiliar",
    year: "2023",
    location: "Manizales, Guatemala",
    area: "280 m² ",
    tags: ["Residencial", "Bioclimático", "Adobe", "Madera"],
    description:
      "Exploración de la arquitectura vernácula Guatemalana reinterpretada con principios bioclimáticos contemporáneos. La vivienda dialoga con el paisaje cafetero a través de su cubierta inclinada de teja de barro y sus patios interiores que regulan la temperatura de forma pasiva. Los materiales —adobe, guadua y madera local— generan una atmósfera cálida que conecta al habitante con la tierra.",
    cover: "./public/images/projects/proyecto-1/cover.jpg",
    images: [
      "./public/images/projects/proyecto-1/1.png",
      "./public/images/projects/proyecto-1/2.png",
      "./public/images/projects/proyecto-1/3.png",
      "./public/images/projects/proyecto-1/4.png",
      "./public/images/projects/proyecto-1/5.png",
      "./public/images/projects/proyecto-1/6.png",
      "./public/images/projects/proyecto-1/7.png",
      "./public/images/projects/proyecto-1/8.png",
      // Agrega más imágenes aquí: "/images/projects/proyecto-1/img-4.jpg",
    ],
    model3d: "public/models/proyecto-1/proyecto-1.glb",         // Click derecho en el modelo 3D → "Copiar ruta" y pégala aquí
    cameraDistance: 15,     // Mayor el número, mayor el zoom out
    featured: true,
  },
  {
    id: "proyecto-2",
    title: "Pabellón del Bosque",
    subtitle: "Espacio Público / Equipamiento",
    year: "2024",
    location: "Guatemala, Guatemala",
    area: "120 m²",
    tags: ["Estructura de Madera", "Espacio Público", "Sostenible"],
    description:
      "Intervención efímera en el Parque Arví que propone un lugar de encuentro y contemplación. La estructura de madera laminada cruzada (CLT) se ancla al terreno con mínima intervención, permitiendo que la luz del bosque se filtre a través de su cubierta calada. El proyecto explora la tensión entre lo construido y lo natural, invitando al visitante a detenerse y escuchar el paisaje.",
    cover: "/images/projects/proyecto-2/cover.jpg",
    images: [
      "/images/projects/proyecto-2/img-1.jpg",
      "/images/projects/proyecto-2/img-2.jpg",
      "/images/projects/proyecto-2/img-3.jpg",
    ],
    model3d: null,
    cameraDistance: 4,     // Pabellón pequeño → un poco más cerca
    featured: true,
  },
  {
    id: "proyecto-3",
    title: "Centro Comunitario Raíces",
    subtitle: "Equipamiento Comunitario",
    year: "2024",
    location: "Jardín, Antioquia",
    area: "450 m²",
    tags: ["Comunitario", "Piedra", "Bahareque", "Participativo"],
    description:
      "Diseño participativo de un centro cultural para la comunidad campesina de Jardín. El programa —biblioteca, salón comunal y aulas taller— se organiza alrededor de una plaza cubierta que actúa como corazón social. La construcción en bahareque encementado y piedra del río respeta la tradición constructiva de la región, mientras que las grandes ventanas orientadas al norte garantizan luz natural difusa todo el año.",
    cover: "/images/projects/proyecto-3/cover.jpg",
    images: [
      "/images/projects/proyecto-3/img-1.jpg",
      "/images/projects/proyecto-3/img-2.jpg",
      "/images/projects/proyecto-3/img-3.jpg",
    ],
    model3d: null,
    cameraDistance: 10,    // Equipamiento más grande → más alejado
    featured: true,
  },
];

/**
 * ============================================================
 *  DATOS PERSONALES — editar aquí
 * ============================================================
 */
export const profile = {
  name: "Isabella Abadía Morales",
  tagline: "Arquitecta · Diseñadora de espacios que respiran",
  bio: `Soy estudiante de arquitectura apasionada por la relación entre el ser humano y su entorno construido. Mi trabajo explora la arquitectura orgánica, los materiales naturales y la construcción sostenible como respuesta al contexto Guatemalano.

Creo que un buen espacio no solo se ve bien —se siente. Por eso cada proyecto comienza escuchando el lugar, el clima y las personas que lo habitarán.`,
  email: "isabella.abadia@email.com",
  instagram: "https://instagram.com/isabella.arquitectura",
  linkedin: "https://linkedin.com/in/isabella-abadia",
  cv: "./cv/isabella-abadia-cv.pdf",   // Coloca tu CV en public/cv/
  photo: "images/profile/isabella.jpeg", // Coloca tu foto en public/images/profile/

  /**
   * SOFTWARE
   * ─────────────────────────────────────────────
   * name   → nombre del programa
   * level  → "Avanzado" | "Intermedio" | "Básico"
   * skills → descripción breve de lo que haces con él
   * ─────────────────────────────────────────────
   */
  software: [
    {
      name: "Revit",
      level: "Avanzado",
      skills: "Modelado BIM, familias, documentación constructiva",
    },
    {
      name: "AutoCAD",
      level: "Avanzado",
      skills: "Planos técnicos, detalles constructivos",
    },
    {
      name: "Lumion",
      level: "Intermedio",
      skills: "Renders fotorrealistas, recorridos animados",
    },
    {
      name: "SketchUp",
      level: "Intermedio",
      skills: "Modelado conceptual, volumetrías rápidas",
    },
    {
      name: "Photoshop",
      level: "Intermedio",
      skills: "Edición de renders, collages, láminas",
    },
    {
      name: "InDesign",
      level: "Básico",
      skills: "Composición de portafolios y láminas técnicas",
    },
  ],
};
