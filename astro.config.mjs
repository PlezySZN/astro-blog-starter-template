// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],

  adapter: cloudflare({
      platformProxy: {
          enabled: true,
      },
	}),

  vite: {
    plugins: [tailwindcss()],
  },

output: 'server', // o 'static' según tu caso,
  image: {
    // Esto le dice a Astro: "No uses sharp, solo pasa las imágenes"
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});