const path = require('path');

module.exports = {
  entry: './source/start.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'my-first-webpack.bundle.js'
  }
};
