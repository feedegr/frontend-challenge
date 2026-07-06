# CHALLENGE · HeroSplitMedia (variante `split-media`)

## Paso 0 — Arrancá el reloj ⏱️

Antes de escribir código:

```bash
git config user.name  "Tu Nombre"   # si no lo tenés seteado
git config user.email "tu@email.com"
npm install
npm run challenge:start              # registra el inicio (también lo hace `npm run dev`)
```

---

## Objetivo

Replicá el componente **`HeroSplitMedia`** en su variante **`split-media`**, lo más fiel posible al
diseño de Figma (ver **[DESIGN.md](./DESIGN.md)**).

Es un banner de dos columnas: a un lado un **grupo de imagen** decorado con **cuatro cuartos de
círculo** en las esquinas; al otro, el **contenido** (badge + título + descripción). Un **logo**
aparece arriba a la derecha en desktop.

## Alcance

- **Solo** la variante `split-media` (no hace falta ninguna otra).
- **Un único corte responsive:** mobile (`< 1024px`) y desktop (`≥ 1024px`).
- Datos de ejemplo (título, descripción, categoría, imagen): definilos vos como props/variables.

## Requisitos

- [ ] Construido en **Vue 3** con **Tailwind CSS** (obligatorio).
- [ ] **Grupo de imagen** con los **4 cuartos de círculo**:
  - Top-right y bottom-left → **verdes**, por **detrás** de la imagen.
  - Top-left → **verde**, por **delante** de la imagen.
  - **Bottom-right → negro**, por **delante** de la imagen.
- [ ] **Logo** arriba a la derecha (visible en desktop).
- [ ] **Badge** de categoría + **título** + **descripción**.
- [ ] **Responsive:** contenido apilado en columna en mobile; en fila (imagen + texto) en desktop.
- [ ] Tipografía: título con **Bricolage Grotesque**, cuerpo con **Manrope** (ya cargadas).

## Libertad (esto se evalúa 👀)

Vos decidís:
- La **estructura de carpetas** y en cuántos **componentes** lo partís.
- Las **props / variables** del componente.
- Si definís **design tokens** en `tailwind.config.js` (colores, tipografía, spacing) o usás
  valores directos. *Definir tokens es opcional pero lo valoramos.*

## Checklist de aceptación

- [ ] Se ve fiel al diseño de Figma en desktop.
- [ ] El layout mobile (`< 1024px`) es coherente y prolijo.
- [ ] Las 4 formas están bien posicionadas y en el orden de capas correcto (el negro adelante,
      abajo a la derecha).
- [ ] El código es legible y está bien organizado.

## Bonus (opcional, si te sobra tiempo)

- ♿ Accesibilidad (alt de la imagen, jerarquía de headings, contraste).
- ✨ Estados hover / transiciones.
- ↔️ Una prop `align` para espejar el layout (imagen a la izquierda / derecha).

---

## Paso final — Entregá ✅

```bash
npm run challenge:submit   # registra la entrega
npm run challenge:time     # te muestra el tiempo total
```

Luego compartí el repo (incluyendo la carpeta `.git`). ¡Gracias! 🦊
