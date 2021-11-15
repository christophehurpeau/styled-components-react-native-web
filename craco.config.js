

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  babel: {
    plugins: ['babel-plugin-styled-components-react-native-web'],
  },
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    ]
  }
}