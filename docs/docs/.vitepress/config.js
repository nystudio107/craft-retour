module.exports = {
    title: 'Retour Documentation',
    description: 'Documentation for the Retour plugin',
    base: '/docs/retour/',
    lang: 'en-US',
    themeConfig: {
        repo: 'nystudio107/craft-retour',
        docsDir: 'docs/docs',
        docsBranch: 'v3',
        algolia: {
            apiKey: '',
            indexName: 'retour'
        },
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: [
            { text: 'Retour Plugin', link: '/' },
            { text: 'Retour Overview', link: '/overview' },
            { text: 'Why Use a Plugin for Redirects?', link: '/whyretour' },
            { text: 'Configuring Retour', link: '/configuring' },
            { text: 'Using Retour', link: '/using' },
            { text: 'Advanced Usage', link: '/advanced' },
        ],
    },
};
