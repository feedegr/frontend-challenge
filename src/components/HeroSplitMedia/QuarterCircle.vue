<script setup>
// Un cuarto de círculo decorativo, posicionado en una esquina del grupo de imagen.
// La geometría, tamaños y capas (z-index) se resuelven en el Paso 4.
defineProps({
  // 'brand' (verde) | 'black'
  color: { type: String, default: 'brand' },
  // Esquina donde se ancla: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  corner: { type: String, default: 'top-left' },
  // Capa respecto de la imagen: 'front' | 'back'
  layer: { type: String, default: 'front' },
})
</script>

<template>
  <span aria-hidden="true" data-role="quarter-circle" :data-corner="corner" :data-layer="layer">
    <!-- TODO Paso 4: forma real -->
  </span>
</template>
