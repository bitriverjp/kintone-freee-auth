const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');

module.exports = {
  entry: {
    desktop: './src/desktop.js',
    mobile: './src/mobile.js',
    config: './src/config.js'
  },
  output: {
    path: path.resolve(__dirname, 'plugin', 'js'),
    filename: '[name].js'
  },
  module: { 
    rules: [
      { 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query: { 
          presets: ["@babel/preset-env", "@babel/react"] 
        } 
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }, 
  resolve: { 
    extensions: ['.js', '.jsx'] 
  }, 
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './plugin/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/kintone-freee-auth-plugin.zip'
    })
  ]
};