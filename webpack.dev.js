// webpack plugins
const merge = require('webpack-merge');
// config files
const common = require('./webpack.common.js');
const jsModern = require('./webpack.js-modern.js');
const jsLegacy = require('./webpack.js-legacy.js');

// Development module
module.exports = [
    merge(
        jsModern,
        {
            mode: 'development',
            devtool: 'inline-source-map'
        }
    ),
    merge(
        common,
        jsLegacy,
        {
            mode: 'development',
            devtool: 'inline-source-map'
        }
    ),
];
