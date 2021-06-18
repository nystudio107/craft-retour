module.exports = {
    title: 'Retour Documentation',
    description: 'Documentation for the Retour plugin',
    base: '/docs/retour/',
    lang: 'en-US',
    head: [
        [
            'script',
            {},
            "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-69117511-1', 'auto');ga('require', 'displayfeatures');ga('send', 'pageview');"
        ],
    ],
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
