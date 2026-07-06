# Invisible Geeks · Frontend Challenge

¡Hola! 👋 Gracias por tu interés en sumarte a **Invisible Geeks**. Esta es una prueba técnica
breve y acotada para conocer cómo trabajás en frontend.

El objetivo es **replicar un componente de UI a partir de un diseño de Figma**, usando nuestro
stack principal: **Vue 3 + Tailwind CSS**.

---

## 🎯 El reto

Reconstruir el componente **`HeroSplitMedia`** (variante **`split-media`**) lo más fiel posible al
diseño de Figma: un banner con una imagen rodeada de cuatro cuartos de círculo en las esquinas,
un título, una descripción, un badge de categoría y un logo.

- ⏱️ **Tiempo estimado:** ~1 hora.
- 📱 **Responsive:** un único corte (mobile → desktop en **1024px**).
- 🧱 **Vos definís la arquitectura:** estructura de carpetas, componentes, props y tokens quedan a
  tu criterio. Queremos ver *cómo organizás el código*, no solo el resultado visual.

👉 El brief detallado está en **[CHALLENGE.md](./CHALLENGE.md)**.
👉 El diseño y los specs están en **[DESIGN.md](./DESIGN.md)**.

---

## 🚀 Puesta en marcha

Requisitos: **Node 20+** (hay un `.nvmrc`).

```bash
npm install
npm run dev
```

Esto levanta el proyecto en `http://localhost:5173`. Editá `src/App.vue` (o creá los componentes
que quieras) para construir tu solución.

> ⏱️ La **primera** vez que corras `npm run dev` se registra automáticamente el inicio del reto
> (ver más abajo).

---

## ⏱️ Cómo medimos el tiempo

El tiempo se trackea con **commits de git**: el primero marca el inicio y el último la entrega.

| Comando | Qué hace |
| --- | --- |
| `npm run challenge:start` | Registra el **inicio** (commit `⏱️ START`). *Se corre solo al hacer `npm run dev` la primera vez.* |
| `npm run challenge:submit` | Registra la **entrega** (commit `✅ SUBMIT`). Corrélo al terminar. |
| `npm run challenge:time` | Muestra el **tiempo total** (START → SUBMIT). |

Antes de empezar, asegurate de tener git configurado:

```bash
git config user.name  "Tu Nombre"
git config user.email "tu@email.com"
```

Podés (y te recomendamos) hacer commits intermedios mientras trabajás. No pasa nada si te excedés
un poco de la hora: no es una carrera, pero sí queremos tener una referencia real del tiempo.

---

## 🎨 Assets

Todo lo necesario ya está en el repo (`public/assets/`), así que podés trabajar offline:

- `assets/images/hero-split-media.svg` — imagen del hero (placeholder 508×384, reemplazable por tu
  export de Figma).
- `assets/logos/health-logo.svg` — logo de la vertical.
- Fuentes **Bricolage Grotesque** (títulos) y **Manrope** (cuerpo), ya cargadas vía `@fontsource`.

---

## 📦 Entrega

1. Al terminar, corré `npm run challenge:submit`.
2. Compartí tu solución como preferís: repositorio propio (GitHub/GitLab), branch, o un `.zip`
   **incluyendo la carpeta `.git`** (así podemos leer los tiempos con `npm run challenge:time`).

---

## ✅ Qué evaluamos

- **Fidelidad al diseño** (pixel-perfect razonable respecto de Figma).
- **Dominio de Tailwind** y CSS.
- **Arquitectura y organización** del código (componentes, props, nombres, tokens).
- **Calidad del responsive** (el corte en 1024px).
- **HTML semántico** y prolijidad del código Vue.

No evaluamos que uses una librería en particular ni "trucos": queremos ver tu forma de trabajar.

¡Éxitos! 🦊
