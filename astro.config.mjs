import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://elisamacedinutrizione.com",
  prefetch: true,
  publicDir: "public",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://elisamacedinutrizione.com/privacy-policy",
    }),
  ],
  // REDIRECTS
  redirects: {
    "/utm_medium=gmb&utm_campaign=596760&utm_content=website":
      "/",
  },
});