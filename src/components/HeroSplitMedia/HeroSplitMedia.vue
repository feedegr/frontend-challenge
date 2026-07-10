<script setup>
// Componente HeroSplitMedia — variante "split-media".
// Banner de dos columnas: grupo de imagen (con formas) + contenido (badge, título, descripción),
// con el logo arriba a la derecha. Tipografía fina y fidelidad: Pasos 5–6.
import MediaFrame from './MediaFrame.vue'

defineProps({
  category: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '/assets/images/hero-split-media.svg' },
  imageAlt: { type: String, default: '' },
  logo: { type: String, default: '/assets/logos/health-logo.svg' },
  // Espeja el layout (imagen a la izquierda / derecha). Bonus, Paso 8.
  align: { type: String, default: 'start' },
})
</script>

<template>
  <section
    data-role="hero-split-media"
    class="relative w-full overflow-hidden bg-banner px-16 py-20 font-body"
  >
    <!-- Logo: arriba a la derecha (visible en desktop) -->
    <img :src="logo" alt="" class="absolute right-16 top-14 h-10 w-10" />

    <!-- Fila: grupo de imagen + contenido -->
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-x-20">
      <MediaFrame :image="image" :image-alt="imageAlt" class="shrink-0" />

      <div data-role="content" class="max-w-md">
        <span
          data-role="badge"
          class="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-title"
        >
          {{ category }}
        </span>

        <h1 class="mt-6 font-display text-title-desktop font-semibold text-title">
          {{ title }}
        </h1>

        <p class="mt-5 text-base leading-6 text-description">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
