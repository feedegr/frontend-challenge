<script setup>
// Componente HeroSplitMedia — variante "split-media".
// Banner de dos columnas: grupo de imagen (con formas) + contenido (badge, título, descripción),
// con el logo arriba a la derecha.
// Responsive: desktop es la base; las clases `laptop:` compactan el layout en <=1279px
// (mismo layout en fila, más chico — no apila).
import MediaFrame from './MediaFrame.vue'

defineProps({
  category: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '/assets/images/hero-split-media.svg' },
  imageAlt: { type: String, default: '' },
  logo: { type: String, default: '/assets/logos/health-logo.svg' },
  // Espeja el layout: 'start' → imagen a la izquierda · 'end' → imagen a la derecha.
  align: {
    type: String,
    default: 'start',
    validator: (v) => ['start', 'end'].includes(v),
  },
})
</script>

<template>
  <section
    data-role="hero-split-media"
    class="relative w-full overflow-hidden bg-banner px-16 py-20 font-body laptop:px-8 laptop:py-12"
  >
    <!-- Logo: arriba a la derecha (visible en desktop) -->
    <img
      :src="logo"
      alt=""
      class="absolute right-16 top-14 h-10 w-10 laptop:right-8 laptop:top-8 laptop:h-9 laptop:w-9"
    />

    <!-- Fila: grupo de imagen + contenido (align='end' espeja el orden) -->
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-x-16 laptop:max-w-4xl laptop:gap-x-10"
      :class="{ 'flex-row-reverse': align === 'end' }"
    >
      <MediaFrame :image="image" :image-alt="imageAlt" class="shrink-0" />

      <div data-role="content" class="max-w-xl laptop:max-w-sm">
        <span
          data-role="badge"
          class="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-title ring-1 ring-black/5"
        >
          {{ category }}
        </span>

        <h1
          class="mt-6 font-display text-title-desktop font-semibold tracking-tight text-title laptop:mt-4 laptop:text-title-compact"
        >
          {{ title }}
        </h1>

        <p class="mt-5 max-w-lg text-base leading-6 text-description laptop:mt-4">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
