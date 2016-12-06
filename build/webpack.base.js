const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const pxtorem = require('postcss-pxtorem')
const Visualizer = require('webpack-visualizer-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),
  output: {
    // 无论 path 是什么, dev 环境的 `index.html` 所引用的 js 路径都是 文件名而已(即与 path 完全无关. 只与
    // filename 字段有关而已)
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    enforceExtension: false,
    moduleExtensions: ['-loader'],
    enforceModuleExtension: false,
    // modulesDirectories: ['node_modules', path.resolve(__dirname, '../node_modules')],
    extensions: [
      '.js',
      '.web.js',
      '.json',
      '.vue',
      '.jsx',
      '.scss',
      '.less',
      '.css',
      '.jpg',
      '.png',
      '.gif',
      '.svg'
    ],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'SRC': path.resolve(__dirname, '../src'),
      'ASSETS': path.resolve(__dirname, '../src/assets'),
      'COMPONENTS': path.resolve(__dirname, '../src/components'),
      'ACTIONS': path.resolve(__dirname, '../src/actions'),
      'CONSTANTS': path.resolve(__dirname, '../src/constants'),
      'CONTAINERS': path.resolve(__dirname, '../src/containers'),
      'MIDDLEWARE': path.resolve(__dirname, '../src/middleware'),
      'REDUCERS': path.resolve(__dirname, '../src/reducers'),
      'STORE': path.resolve(__dirname, '../src/store'),
      'ROUTES': path.resolve(__dirname, '../src/routes')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        // loader: ['style-loader', 'css-loader', 'postcss-loader']
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.(sass|scss)$/,
        // include: path.resolve(__dirname, 'src'),
        // loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
      },

      {
        test: /\.less$/,
        // include: path.resolve(__dirname, 'src'),
        // loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader!less-loader'
      },
      // {
      //   test: /\.css$/,
      //   // loader: ['style-loader', 'css-loader', 'postcss-loader']
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: 'style-loader',
      //     loader: ['style-loader', 'css-loader', 'postcss-loader']
      //   })
      // },
      // {
      //   test: /\.(sass|scss)$/,
      //   // include: path.resolve(__dirname, 'src'),
      //   // loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: 'style-loader',
      //     loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      //   })
      // },

      {
        // 只有去掉babel的cjs模块，才能做tree shaking打包(https://github.com/xyc-cn/webpack2-demo/blob/master/webpack.config.js)
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
        loader: 'file-loader',
        query: {
          name: 'file/[name].[ext]'
        }
      }
    ],
  // rules: [
  //   {
  //     test: /\.less$/,
  //     loader: ExtractTextPlugin.extract({
  //       loader: 'css-loader?importLoaders=1!less-loader'
  //     }),
  //   // use: [
  //   //   'style-loader',
  //   //   'css-loader',
  //   //   'less-loader'
  //   // // { loader: 'css-loader', options: { modules: true } }
  //   // ]
  //   }
  // ]
  },
  plugins: [
    // 打包分析
    new Visualizer({filename: './statistics.html'}),
    new webpack
      .optimize
      .OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [
            customMedia(),
            cssnext(),
            customProperties(),
            pxtorem({rootValue: 20, propWhiteList: []})
          ]
        }
      }
    })
  ]
}
