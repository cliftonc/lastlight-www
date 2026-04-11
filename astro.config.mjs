// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://lastlight.dev',
  integrations: [
    sitemap({
      // /docs/ is a meta-refresh redirect to /docs/introduction, not a real page
      filter: (page) => !page.endsWith('/docs/'),
    }),
  ],
});
