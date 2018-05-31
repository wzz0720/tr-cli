const paths = require('../config/path');

const config = {
  devtool: 'cheap-source-map',
  entry: {
    main: [paths.appIndexJs]
  },
  output: {
    path: paths.appBuild,
    pathinfo: true
  },
  moduleLoaders: {
    js: {
      test: /\.(js|jsx)$/,
      exclude: /^node_modules$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 7']
                  }
                }
              ]
            ],
            plugins: ['babel-plugin-transform-object-rest-spread', 'transform-object-assign']
          }
        }
      ]
    },
    css: {
      test: /\.(css|scss)$/,
      exclude: /^node_modules$/
    },
    images: {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/images/[name].[hash:8].[ext]'
      }
    }
  }
};

module.exports = config;
