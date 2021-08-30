module.exports = {
    title: 'Retour Plugin Documentation',
    description: 'Documentation for the Retour plugin',
    base: '/docs/retour/',
    lang: 'en-US',
    head: [
        ['meta', { content: 'https://github.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://twitter.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://youtube.com/nystudio107', property: 'og:see_also', }],
        ['meta', { content: 'https://www.facebook.com/newyorkstudio107', property: 'og:see_also', }],
    ],
    themeConfig: {
        repo: 'nystudio107/craft-retour',
        docsDir: 'docs/docs',
        docsBranch: 'v3',
        algolia: {
            apiKey: 'db19b4e70a07de73e69ed25b2888f86c',
            indexName: 'retour'
        },
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: [
            { text: 'Retour Plugin', link: '/' },
            { text: 'Retour Overview', link: '/overview.html' },
            { text: 'Why Use a Plugin for Redirects?', link: '/whyretour.html' },
            { text: 'Configuring Retour', link: '/configuring.html' },
            { text: 'Using Retour', link: '/using.html' },
            { text: 'Advanced Usage', link: '/advanced.html' },
        ],
    },
};
