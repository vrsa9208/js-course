const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename:'bundle.js' },
    module: { rules: [
        { 
            test: /\.css$/, 
            use: [{ loader: 'style-loader'},{ loader: 'css-loader'}]
        },
        {
            test: /\.js$/, 
            use: [{ loader: 'babel-loader'}]
        }
    ] },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
};