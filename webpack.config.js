const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname + 'src'),
    filename: 'bundle.main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
