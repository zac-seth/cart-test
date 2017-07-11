const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

function assets(_path) {
  return path.posix.join('assets', _path)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('src'),
    filename: 'bundle.main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      assets: resolve("src/assets"),
      elements: resolve("src/elements"),
      store: resolve("src/store"),
      views: resolve("src/views")
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assets('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assets('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
