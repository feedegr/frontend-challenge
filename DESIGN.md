# DESIGN · HeroSplitMedia (`split-media`)

## 🔗 Figma (fuente de verdad)

**[Abrir el componente en Figma →](PEGAR_AQUÍ_EL_LINK_PÚBLICO)**

> El link se comparte en modo **solo lectura**. Podés inspeccionar medidas, colores y tipografía en
> **Dev Mode**, y exportar los assets si querés. Si por algún motivo no podés acceder, con los specs
> de abajo + los assets del repo tenés todo lo necesario.

---

## 📐 Specs clave

Layout de dos columnas sobre un fondo gris claro, con padding generoso. En mobile el contenido se
apila; en desktop (**≥ 1024px**) va en fila (imagen + texto), con el logo arriba a la derecha.

### Colores

| Uso | Hex |
| --- | --- |
| Fondo del banner | `#F5F5F5` |
| Título | `#121212` |
| Descripción | `#494B4D` |
| Cuartos de círculo (verde) | `#00C266` |
| Cuarto inferior-derecho | **negro** (`#000000`) |

### Tipografía

| Elemento | Fuente | Tamaño / interlineado |
| --- | --- | --- |
| Título (desktop) | Bricolage Grotesque | 56 / 72 px |
| Título (mobile) | Bricolage Grotesque | ~28 / 34 px |
| Descripción | Manrope | 16 / 24 px |

### Imagen y formas

- **Imagen:** rectangular, ~**508×384**, esquinas redondeadas (~16–20px).
- **4 cuartos de círculo** en las esquinas del grupo de imagen:
  - **Top-right** y **bottom-left** → verdes, **detrás** de la imagen (más grandes, ~168px).
  - **Top-left** → verde, **delante** de la imagen (~112px).
  - **Bottom-right** → **negro**, **delante** de la imagen (~112px).
- El grupo (imagen + salientes de las formas) queda **contenido dentro del padding** del banner.

### Responsive

- **Único corte: 1024px.**
- `< 1024px`: columna (imagen arriba, contenido abajo, centrados).
- `≥ 1024px`: fila (imagen a un lado, contenido al otro) + logo arriba a la derecha.

---

## 🎨 Assets en el repo

- `public/assets/images/hero-split-media.svg` — placeholder 508×384 (reemplazable por tu export).
- `public/assets/logos/health-logo.svg` — logo de la vertical (40×40 en desktop).
- Fuentes cargadas vía `@fontsource` (`src/main.js`): **Bricolage Grotesque**, **Manrope**.

> Los valores de arriba son una referencia; el pixel-perfect final se toma de **Figma**.
