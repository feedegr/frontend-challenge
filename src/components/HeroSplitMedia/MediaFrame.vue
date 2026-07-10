<script setup>
// Grupo de imagen: la imagen rectangular + los 4 cuartos de círculo en las esquinas.
// Orden de capas (z-index):
//   • top-right y bottom-left → verde, DETRÁS de la imagen (más grandes).
//   • top-left → verde, DELANTE de la imagen.
//   • bottom-right → negro, DELANTE de la imagen.
// Las dimensiones se controlan con variables CSS (ver <style>), que se reducen en el
// breakpoint compacto para que imagen y formas escalen juntas.
import QuarterCircle from './QuarterCircle.vue'

defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
})
</script>

<template>
  <div data-role="media-frame" class="relative">
    <!-- Detrás de la imagen (verde, más grandes) -->
    <QuarterCircle color="brand" corner="top-right" layer="back" size="var(--qc-back)" overhang="var(--qc-overhang)" />
    <QuarterCircle color="brand" corner="bottom-left" layer="back" size="var(--qc-back)" overhang="var(--qc-overhang)" />

    <!-- La imagen -->
    <img
      :src="image"
      :alt="imageAlt"
      class="relative z-10 h-full w-full rounded-media object-cover shadow-none transition-shadow duration-300 ease-out hover:shadow-2xl"
    />

    <!-- Delante de la imagen -->
    <QuarterCircle color="brand" corner="top-left" layer="front" size="var(--qc-front)" overhang="var(--qc-overhang)" />
    <QuarterCircle color="black" corner="bottom-right" layer="front" size="var(--qc-front)" overhang="var(--qc-overhang)" />
  </div>
</template>

<style scoped>
[data-role='media-frame'] {
  width: var(--img-w);
  height: var(--img-h);

  /* Desktop */
  --img-w: 508px;
  --img-h: 384px;
  --qc-back: 168px;
  --qc-front: 112px;
  --qc-overhang: 24px;
}

/* Compacto (~1024px): mismo grupo, más chico */
@media (max-width: 1279px) {
  [data-role='media-frame'] {
    --img-w: 404px;
    --img-h: 305px;
    --qc-back: 134px;
    --qc-front: 90px;
    --qc-overhang: 18px;
  }
}
</style>
