<script setup>
// Punto de montaje. Los datos son de ejemplo y se pasan como props para dejar claro
// que el componente es reutilizable / prop-driven.
import HeroSplitMedia from './components/HeroSplitMedia/HeroSplitMedia.vue'

const hero = {
  category: 'Bienestar',
  title: 'Cuidamos tu salud en cada paso',
  description:
    'Un programa integral de bienestar que combina atención médica, seguimiento personalizado y hábitos saludables para vos y tu equipo.',
  image: '/assets/images/hero-split-media.svg',
  imageAlt: 'Equipo de trabajo compartiendo un momento de bienestar',
  logo: '/assets/logos/health-logo.svg',
}
</script>

<template>
  <HeroSplitMedia
    :category="hero.category"
    :title="hero.title"
    :description="hero.description"
    :image="hero.image"
    :image-alt="hero.imageAlt"
    :logo="hero.logo"
  />
</template>
