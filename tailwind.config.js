/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 👋 Este objeto está vacío A PROPÓSITO.
      //
      // Sos libre de definir acá tus propios design tokens (colores, tipografía,
      // spacing, radios, breakpoints…) si querés — es OPCIONAL pero lo valoramos.
      // También podés maquetar con valores directos (arbitrary values) si preferís.
      //
      // Ejemplo (borralo o adaptalo):
      // colors: { brand: '#121212', 'gray-97': '#F5F5F5' },
      // fontFamily: { display: ['Bricolage Grotesque', 'sans-serif'], body: ['Manrope', 'sans-serif'] },
    },
    screens: {
      // Único corte responsive de la prueba. Podés cambiarlo si lo preferís.
      laptop: '1024px',
    },
  },
  plugins: [],
}
