module.exports = {
    entry: {
        main: './src/index.js'
    },
    devtool: 'source-map',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
}
