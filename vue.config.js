const ImageminPlugin = require('imagemin-webpack-plugin').default;

const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        test: 'images/**',
        optipng: {
          optimizationLevel: 9,
        },
      }),
    ],
  },
};
