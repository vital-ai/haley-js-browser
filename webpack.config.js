const path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
    tls: 'empty', 
    net: 'empty',
    request: 'empty',
  }
};