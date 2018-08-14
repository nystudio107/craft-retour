// js-modern, builds the modern JavaScript bundle

// node modules
const path = require('path');

// webpack plugins

// config files
const pkg = require('./package.json');

// js-legacy module
module.exports = {
    output: {
        filename: path.join('./js', '[name]-legacy.js'),
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
                    plugins: [
                        'syntax-dynamic-import',
                        ["transform-runtime", {
                            "polyfill": false,
                            "regenerator": true
                        }]
                    ],
                },
            },
        ]
    }
};
