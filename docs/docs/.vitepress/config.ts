import {defineConfig} from 'vitepress'

export default defineConfig({
  title: 'Retour Plugin',
  description: 'Documentation for the Retour plugin',
  base: '/docs/retour/',
  lang: 'en-US',
  head: [
    ['meta', {content: 'https://github.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://twitter.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://youtube.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://www.facebook.com/newyorkstudio107', property: 'og:see_also',}],
  ],
  themeConfig: {
    socialLinks: [
      {icon: 'github', link: 'https://github.com/nystudio107'},
      {icon: 'twitter', link: 'https://twitter.com/nystudio107'},
    ],
    logo: '/img/plugin-logo.svg',
    editLink: {
      pattern: 'https://github.com/nystudio107/craft-retour/edit/develop-v4/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    algolia: {
      appId: 'PBLZ7FT9Z3',
      apiKey: 'ab56b755c575dc94a58f7d1cae6e4e0e',
      indexName: 'retour'
    },
    lastUpdatedText: 'Last Updated',
    sidebar: [
      {
        text: 'Topics',
        items: [
          {text: 'Retour Plugin', link: '/'},
          {text: 'Retour Overview', link: '/overview.html'},
          {text: 'Why Use a Plugin for Redirects?', link: '/whyretour.html'},
          {text: 'Configuring Retour', link: '/configuring.html'},
          {text: 'Using Retour', link: '/using.html'},
          {text: 'Short Links', link: '/shortlinks.html'},
          {text: 'Advanced Usage', link: '/advanced.html'},
        ],
      }
    ],
    nav: [
      {text: 'Home', link: 'https://nystudio107.com/plugins/retour'},
      {text: 'Store', link: 'https://plugins.craftcms.com/retour'},
      {text: 'Changelog', link: 'https://nystudio107.com/plugins/retour/changelog'},
      {text: 'Issues', link: 'https://github.com/nystudio107/craft-retour/issues'},
      {
        text: 'v4', items: [
          {text: 'v5', link: 'https://nystudio107.com/docs/retour/'},
          {text: 'v4', link: '/'},
          {text: 'v3', link: 'https://nystudio107.com/docs/retour/v3/'},
        ],
      },
    ],
  },
});
