/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Superficie del banner y tinta del texto.
        banner: '#F5F5F5',
        title: '#121212',
        description: '#494B4D',
        // Verde de marca para las formas (3 de los 4 cuartos de círculo).
        brand: {
          DEFAULT: '#00C266',
          green: '#00C266',
        },
      },
      fontFamily: {
        // display → títulos · body → cuerpo (cargadas offline vía @fontsource en main.js).
        display: ['Bricolage Grotesque', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Título: desktop y variante compacta 1024px (size / line-height).
        'title-desktop': ['3.5rem', { lineHeight: '4.5rem' }], // 56 / 72
        'title-compact': ['1.75rem', { lineHeight: '2.125rem' }], // 28 / 34
      },
      borderRadius: {
        // Esquinas de la imagen del hero (~16–20px).
        media: '1.25rem', // 20px
      },
    },
    screens: {
      // Desktop es la base (sin prefijo). `laptop:` aplica los overrides COMPACTOS en
      // pantallas <= 1279px (el rango ~1024 del diseño). No apila: mismo layout, más chico.
      laptop: { max: '1279px' },
    },
  },
  plugins: [],
}
