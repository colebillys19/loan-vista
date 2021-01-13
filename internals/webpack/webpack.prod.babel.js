// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'app/app.js'),
  ],

  mode: 'production',

  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: { comparisons: false },
          mangle: true,
          output: { ascii_only: true, comments: false },
          parse: {},
          warnings: false,
        },
      }),
    ],
    nodeEnv: 'production',
    runtimeChunk: 'single',
    sideEffects: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
    },
  },

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
  },

  performance: {
    assetFilter: (assetFilename) =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: 'app/index.html',
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      appShell: '/',
      caches: {
        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],

        main: [':rest:'],
      },

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      publicPath: '/',
      relativePaths: false,

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,
    }),

    new CompressionPlugin({
      algorithm: 'gzip',
      minRatio: 0.8,
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),

    new WebpackPwaManifest({
      background_color: '#fafafa',
      description: 'My React Boilerplate-based project!',
      icons: [
        {
          sizes: [72, 96, 128, 144, 192, 384, 512],
          src: path.resolve('app/images/icon-512x512.png'),
        },
        {
          ios: true,
          sizes: [120, 152, 167, 180],
          src: path.resolve('app/images/icon-512x512.png'),
        },
      ],
      inject: true,
      ios: true,
      name: 'React Boilerplate',
      short_name: 'React BP',
      theme_color: '#b1624d',
    }),

    new HashedModuleIdsPlugin({
      hashDigest: 'hex',
      hashDigestLength: 20,
      hashFunction: 'sha256',
    }),
  ],
});
