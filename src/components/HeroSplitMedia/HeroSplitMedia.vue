<script setup>
// Componente HeroSplitMedia — variante "split-media".
// Banner de dos columnas: grupo de imagen (con formas) + contenido (badge, título, descripción),
// con el logo arriba a la derecha. El layout y los estilos se construyen en los Pasos 3–6.
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
  <section data-role="hero-split-media">
    <!-- TODO Paso 3: logo arriba a la derecha -->
    <img :src="logo" alt="" data-role="logo" />

    <!-- TODO Paso 3: layout de dos columnas -->
    <MediaFrame :image="image" :image-alt="imageAlt" />

    <div data-role="content">
      <span data-role="badge">{{ category }}</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </section>
</template>
