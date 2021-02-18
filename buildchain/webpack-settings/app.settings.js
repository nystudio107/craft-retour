// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        '@css': path.resolve('../src/assetbundles/retour/src/css'),
        '@img': path.resolve('../src/assetbundles/retour/src/img'),
        '@js': path.resolve('../src/assetbundles/retour/src/js'),
        '@vue': path.resolve('../src/assetbundles/retour/src/vue'),
    },
    copyright: '©2020 nystudio107.com',
    entry: {
        'dashboard': '@js/Dashboard.js',
        'import': '@js/Import.js',
        'redirects': '@js/Redirects.js',
        'retour': '@js/Retour.js',
        'widget': '@js/Widget.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'retour',
    paths: {
        dist: path.resolve('../src/assetbundles/retour/dist/'),
    },
    urls: {
        publicPath: () => process.env.PUBLIC_PATH || '',
    },
};
