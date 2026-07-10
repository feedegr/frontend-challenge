<script setup>
// Grupo de imagen: la imagen rectangular + los 4 cuartos de círculo en las esquinas.
// Orden de capas (z-index):
//   • top-right y bottom-left → verde, DETRÁS de la imagen (más grandes).
//   • top-left → verde, DELANTE de la imagen.
//   • bottom-right → negro, DELANTE de la imagen.
import QuarterCircle from './QuarterCircle.vue'

defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
})
</script>

<template>
  <div data-role="media-frame" class="relative h-[384px] w-[508px]">
    <!-- Detrás de la imagen (verde, más grandes) -->
    <QuarterCircle color="brand" corner="top-right" layer="back" :size="168" />
    <QuarterCircle color="brand" corner="bottom-left" layer="back" :size="168" />

    <!-- La imagen -->
    <img
      :src="image"
      :alt="imageAlt"
      class="relative z-10 h-full w-full rounded-media object-cover"
    />

    <!-- Delante de la imagen -->
    <QuarterCircle color="brand" corner="top-left" layer="front" :size="112" />
    <QuarterCircle color="black" corner="bottom-right" layer="front" :size="112" />
  </div>
</template>
