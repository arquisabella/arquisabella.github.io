# Isabella Abadía Morales — Portfolio de Arquitectura

Portafolio personal de arquitectura construido con React + Vite. Diseño orgánico, cálido y con soporte para modelos 3D (.fbx / .glb).

---

## 🚀 Cómo correr el proyecto localmente

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

---

## 📁 Estructura de carpetas

```
isabella-portfolio/
│
├── public/
│   ├── images/
│   │   ├── hero/               ← Imagen de fondo del hero (opcional)
│   │   ├── profile/
│   │   │   └── isabella.jpg    ← TU FOTO (cuadrada o 3:4 preferida)
│   │   └── projects/
│   │       ├── proyecto-1/
│   │       │   ├── cover.jpg   ← Imagen principal de la card
│   │       │   ├── img-1.jpg   ← Imágenes de la galería
│   │       │   ├── img-2.jpg
│   │       │   └── img-3.jpg
│   │       ├── proyecto-2/
│   │       └── proyecto-3/
│   ├── models/
│   │   └── proyecto-1.fbx      ← Modelos 3D (FBX o GLB)
│   └── cv/
│       └── isabella-abadia-cv.pdf  ← TU CV en PDF
│
└── src/
    └── data/
        └── projects.js         ← ✏️ EDITAR AQUÍ los datos
```

---

## ✏️ Cómo agregar o editar proyectos

Abre el archivo **`src/data/projects.js`** — está comentado paso a paso.

### Agregar un nuevo proyecto:

1. Crea la carpeta `public/images/projects/proyecto-4/`
2. Agrega: `cover.jpg`, `img-1.jpg`, `img-2.jpg`, `img-3.jpg`
3. (Opcional) Agrega el modelo 3D en `public/models/proyecto-4.fbx`
4. En `projects.js`, copia un bloque de proyecto y rellena:

```js
{
  id: "proyecto-4",
  title: "Nombre del proyecto",
  subtitle: "Tipología (ej: Vivienda, Equipamiento...)",
  year: "2025",
  location: "Ciudad, País",
  area: "200 m²",
  tags: ["Tag1", "Tag2", "Tag3"],
  description: "Descripción del proyecto...",
  cover: "/images/projects/proyecto-4/cover.jpg",
  images: [
    "/images/projects/proyecto-4/img-1.jpg",
    "/images/projects/proyecto-4/img-2.jpg",
    "/images/projects/proyecto-4/img-3.jpg",
  ],
  model3d: "/models/proyecto-4.fbx",  // o null si no hay modelo
  featured: true,
}
```

---

## 🌐 Publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado `isabella-portfolio`
2. En `vite.config.js`, el `base` ya está configurado automáticamente
3. Instala gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Agrega al `package.json` en scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
5. Ejecuta:
   ```bash
   npm run deploy
   ```
6. En GitHub → Settings → Pages → Source: `gh-pages` branch

---

## 🎨 Personalizar colores

Los colores están en **`src/styles/globals.css`** bajo `:root { }`:

```css
--terracota: #B5622A;   /* Color principal (botones, líneas) */
--espresso:  #2C1A0E;   /* Textos oscuros */
--cream:     #F5F0E8;   /* Fondo principal */
```

---

## 📦 Tecnologías usadas

- **React 19** + **Vite 8** — frontend ultrarrápido
- **Three.js** + **@react-three/fiber** — visor de modelos 3D
- **GSAP** — animaciones avanzadas
- **CSS custom properties** — theming centralizado
