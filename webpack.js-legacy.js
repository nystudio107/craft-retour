// js-modern, builds the modern JavaScript bundle

// node modules
const path = require('path');

// webpack plugins

// config files
const pkg = require('./package.json');

// js-legacy module
module.exports = {
    entry: {
        'retour': path.resolve(__dirname, pkg.paths.src.js + 'Retour.js'),
        'dashboard': path.resolve(__dirname, pkg.paths.src.js + 'Dashboard.js'),
    },
    output: {
        path: path.resolve(__dirname, pkg.paths.dist.base),
        filename: path.join('./js', '[name]-legacy.js'),
        publicPath: '/cpresources/retour/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['env', {
                            modules: false,
                            useBuiltIns: true,
                            targets: {
                                browsers:  [
                                    '> 1%',
                                    'last 2 versions',
                                    'Firefox ESR',
                                ],
                            },
                        }],
                    ],
                    plugins: ['syntax-dynamic-import'],
                },
            },
        ]
    }
};
