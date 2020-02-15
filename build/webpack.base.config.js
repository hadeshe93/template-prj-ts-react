const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      app: './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
      splitChunks: {
        // 该配置会将 node_modules 下的包单独抽离出来，打成一个 vendor 文件
        chunks: 'all',
        automaticNameDelimiter: '.'
      }
    }
}
