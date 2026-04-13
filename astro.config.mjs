import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://grd23cd.github.io/sldc-website',

  vite: {
    plugins: [tailwindcss()]
  }
});
