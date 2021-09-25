const path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false
    }
  }
};