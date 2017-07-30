module.exports = {
    entry: './src/main.src.js',
    output: {
        filename: './src/main.js'
    },
    module: {
        rules: [
            // babel rule
            {
                test: /\.js$/,
                exclude: /(node_modules|lib)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    'targets': {
                                        'chrome': '50',
                                        'firefox': '45',
                                        'edge': '14',
                                        'ie': '11',
                                        'safari': '10',
                                        'ios': '9.3',
                                        'android': '4.4',
                                        'opera': '42'
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};
