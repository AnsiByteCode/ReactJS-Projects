var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client'
  ],
  // output: {
  //   path: path.join(__dirname),
  //   filename: 'index.js',
  //   publicPath: '/static/'
  // },
  node: {
                dns: 'mock',
                net: 'mock'
                },
                  plugins: [
                    new webpack.HotModuleReplacementPlugin()
                  ],
                  module: {
                  //   preLoaders: [
                  //     { test: /\.json$/, loader: 'json'},
                  // ],
                    loaders: [
                                { test: /\.json$/, loader: "json" },
                                { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
                                { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
                                { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
                                { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
                                { test: /\.css$/, loader: 'style-loader'},
                                { test: /\.css$/, loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]'}},
                                { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'client/js')}
                             ]
        },
  resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
        'node_modules'
      ]
  }

};
