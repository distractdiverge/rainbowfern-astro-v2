// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rainbowfern.com',
  server: {
    port: 1234
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
