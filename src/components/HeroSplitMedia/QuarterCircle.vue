<script setup>
// Un cuarto de círculo decorativo, anclado a una esquina del grupo de imagen.
// Se construye como un cuadrado con la esquina EXTERIOR redondeada al 100% (la curva
// mira hacia afuera del grupo) y sobresale `overhang` del borde de la imagen.
// `size` y `overhang` aceptan cualquier longitud CSS (incl. var()), para que el grupo
// pueda reducirse de forma responsive desde MediaFrame.
import { computed } from 'vue'

const props = defineProps({
  // 'brand' (verde) | 'black'
  color: { type: String, default: 'brand' },
  // Esquina donde se ancla: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  corner: { type: String, default: 'top-left' },
  // Capa respecto de la imagen: 'front' | 'back'
  layer: { type: String, default: 'front' },
  // Diámetro del cuarto de círculo (longitud CSS).
  size: { type: String, default: '112px' },
  // Cuánto sobresale del borde de la imagen (longitud CSS).
  overhang: { type: String, default: '24px' },
})

// La esquina redondeada es la misma que la de anclaje → la curva apunta hacia afuera.
const radius = {
  'top-left': { borderTopLeftRadius: '100%' },
  'top-right': { borderTopRightRadius: '100%' },
  'bottom-left': { borderBottomLeftRadius: '100%' },
  'bottom-right': { borderBottomRightRadius: '100%' },
}

// Anclaje a la esquina, sobresaliendo `overhang` hacia afuera en ambos ejes.
const position = computed(() => {
  const o = `calc(-1 * ${props.overhang})`
  return {
    'top-left': { top: o, left: o },
    'top-right': { top: o, right: o },
    'bottom-left': { bottom: o, left: o },
    'bottom-right': { bottom: o, right: o },
  }[props.corner]
})

const style = computed(() => ({
  width: props.size,
  height: props.size,
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
