import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://socialforgood.ie',
  integrations: [sitemap({ filter: (page) => !/\/(thanks|404|styleguide)\/?$/.test(page) })],
});
