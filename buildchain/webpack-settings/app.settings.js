// app.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    alias: {
    },
    copyright: '©2020 nystudio107.com',
    entry: {
        'dashboard': '../src/assetbundles/retour/src/js/Dashboard.js',
        'import': '../src/assetbundles/retour/src/js/Import.js',
        'redirects': '../src/assetbundles/retour/src/js/Redirects.js',
        'retour': '../src/assetbundles/retour/src/js/Retour.js',
        'widget': '../src/assetbundles/retour/src/js/Widget.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'retour',
    paths: {
        dist: '../../src/assetbundles/retour/dist/',
    },
    urls: {
        publicPath: () => process.env.PUBLIC_PATH || '',
    },
};
