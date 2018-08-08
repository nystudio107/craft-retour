// webpack plugins
const merge = require('webpack-merge');
// config files
const common = require('./webpack.common.js');

// Development module
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map'
});
