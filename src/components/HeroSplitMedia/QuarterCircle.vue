<script setup>
// Un cuarto de círculo decorativo, anclado a una esquina del grupo de imagen.
// Se construye como un cuadrado con la esquina EXTERIOR redondeada al 100% (la curva
// mira hacia afuera del grupo) y sobresale `overhang` px del borde de la imagen.
import { computed } from 'vue'

const props = defineProps({
  // 'brand' (verde) | 'black'
  color: { type: String, default: 'brand' },
  // Esquina donde se ancla: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  corner: { type: String, default: 'top-left' },
  // Capa respecto de la imagen: 'front' | 'back'
  layer: { type: String, default: 'front' },
  // Diámetro del cuarto de círculo (px).
  size: { type: Number, default: 112 },
  // Cuánto sobresale del borde de la imagen (px).
  overhang: { type: Number, default: 28 },
})

// La esquina redondeada es la misma que la de anclaje → la curva apunta hacia afuera.
const radius = {
  'top-left': { borderTopLeftRadius: '100%' },
  'top-right': { borderTopRightRadius: '100%' },
  'bottom-left': { borderBottomLeftRadius: '100%' },
  'bottom-right': { borderBottomRightRadius: '100%' },
}

// Anclaje a la esquina, sobresaliendo `overhang` px hacia afuera en ambos ejes.
const position = computed(() => {
  const o = `-${props.overhang}px`
  return {
    'top-left': { top: o, left: o },
    'top-right': { top: o, right: o },
    'bottom-left': { bottom: o, left: o },
    'bottom-right': { bottom: o, right: o },
  }[props.corner]
})

const style = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  ...position.value,
  ...radius[props.corner],
}))
</script>

<template>
  <span
    aria-hidden="true"
    class="pointer-events-none absolute block"
    :class="[
      color === 'black' ? 'bg-black' : 'bg-brand',
      layer === 'back' ? 'z-0' : 'z-20',
    ]"
    :style="style"
  />
</template>
