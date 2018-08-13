// js-legacy, builds the legacy JavaScript bundle

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
        filename: path.join('./js', '[name].js'),
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
                        [
                            'env', {
                            modules: false,
                            useBuiltIns: true,
                            targets: {
                                browsers: [
                                    'Chrome >= 60',
                                    'Safari >= 10.1',
                                    'iOS >= 10.3',
                                    'Firefox >= 54',
                                    'Edge >= 15',
                                ],
                            },
                        }
                        ],
                    ],
                    "plugins": [
                        "syntax-dynamic-import",
                        [
                            "transform-runtime", {
                            "polyfill": false,
                            "regenerator": true
                        }
                        ]
                    ]
                },
            },
            {
                test: /\.pcss$/,
                loader: 'ignore-loader'
            }
        ]
    }
};
