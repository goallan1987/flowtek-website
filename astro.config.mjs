// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flowtekservices.com.au',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date('2026-08-20'),
      // /thanks/ is a form confirmation and carries noindex. Keep it out.
      filter: (page) => !page.includes('/thanks/') && !page.includes('/photo-styles/'),
      serialize(item) {
        // The home page and the two hub pages carry the most weight.
        if (item.url === 'https://flowtekservices.com.au/') item.priority = 1.0;
        else if (/\/(services|areas-we-serve)\/$/.test(item.url)) item.priority = 0.9;
        else if (/\/services\//.test(item.url)) item.priority = 0.8;
        else if (/\/plumber-/.test(item.url)) item.priority = 0.7;
        else item.priority = 0.5;
        return item;
      },
    }),
  ],
  image: { responsiveStyles: true },
});
