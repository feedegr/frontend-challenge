<script setup>
// Grupo de imagen: la imagen rectangular + los 4 cuartos de círculo en las esquinas.
// El posicionamiento y el orden de capas se resuelven en el Paso 4.
import QuarterCircle from './QuarterCircle.vue'

defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
})
</script>

<template>
  <div data-role="media-frame">
    <img :src="image" :alt="imageAlt" />
    <!-- TODO Paso 4: 4x QuarterCircle con capas correctas -->
  </div>
</template>
