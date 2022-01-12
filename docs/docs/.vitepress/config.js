module.exports = {
    title: 'Retour Plugin Documentation',
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
        repo: 'nystudio107/craft-retour',
        docsDir: 'docs/docs',
        docsBranch: 'develop',
        algolia: {
            appId: 'PBLZ7FT9Z3',
            apiKey: 'ab56b755c575dc94a58f7d1cae6e4e0e',
            indexName: 'retour'
        },
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: [
            {text: 'Retour Plugin', link: '/'},
            {text: 'Retour Overview', link: '/overview.html'},
            {text: 'Why Use a Plugin for Redirects?', link: '/whyretour.html'},
            {text: 'Configuring Retour', link: '/configuring.html'},
            {text: 'Using Retour', link: '/using.html'},
            {text: 'Advanced Usage', link: '/advanced.html'},
        ],
    },
};
