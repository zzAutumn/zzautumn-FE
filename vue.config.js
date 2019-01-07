const ImageminPlugin = require('imagemin-webpack-plugin').default;

const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/zzautumn': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/zzautumn': '/zzautumn',
        },
        secure: false,
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
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
