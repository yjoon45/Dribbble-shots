const webpack = require('webpack');
const { resolve } = require('path');

module.exports = env => {
  return {
    context: resolve(__dirname, 'src'),
    entry: './app.js',
    devtool: env === 'development' ? 'eval' : 'sourcemap',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: ['react-html-attrs', 'transform-object-rest-spread']
            }
          }
        }
      ]
    },
    plugins: env === 'development' ? [
      new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           Tether: 'tether'
       })
    ] : [
      new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           Tether: 'tether'
       }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
    output: {
      path: resolve(__dirname, 'dist'),
      filename: './js/app.bundle.js'
    }
  }
};
