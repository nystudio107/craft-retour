// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
    name: "Retour",
    copyright: "nystudio107",
    paths: {
        src: {
            base: "./src/assetbundles/retour/src/",
            css: "./src/assetbundles/retour/src/css/",
            js: "./src/assetbundles/retour/src/js/"
        },
        dist: {
            base: "./src/assetbundles/retour/dist/",
            clean: [
                '**/*',
            ]
        },
        templates: "./src/templates/"
    },
    urls: {
        publicPath: () => process.env.PUBLIC_PATH || "",
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "dashboard": "Dashboard.js",
        "import": "Import.js",
        "redirects": "Redirects.js",
        "retour": "Retour.js",
        "widget": "Widget.js"
    },
    babelLoaderConfig: {
        exclude: [
            /(node_modules|bower_components)/
        ],
    },
    copyWebpackConfig: [
    ],
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || false,
    },
    manifestConfig: {
        basePath: ""
    },
    purgeCssConfig: {
        paths: [
            "./src/templates/**/*.{twig,html}",
            "./node_modules/vuetable-2/src/components/**/*.{vue,html}",
            "./src/assetbundles/retour/src/vue/**/*.{vue,html}"
        ],
        whitelist: [
            "./src/assetbundles/retour/src/css/components/**/*.{css,pcss}"
        ],
        whitelistPatterns: [],
        extensions: [
            "html",
            "js",
            "twig",
            "vue"
        ]
    },
    saveRemoteFileConfig: [
    ],
    createSymlinkConfig: [
    ],
};
