const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');

module.exports = {
  entry: {
    desktop: './src/desktop.jsx',
    config: './src/config.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'plugin', 'js'),
    filename: '[name].js'
  },
  module: { 
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      { 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }, 
  resolve: { 
    extensions: ['.js', '.jsx'] 
  },
  performance: { hints: false },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './plugin/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/kintone-freee-auth-plugin.zip'
    })
  ]
};