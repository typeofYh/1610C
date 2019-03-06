var path = require('path')
var webpack = require('webpack')
var Mock = require('mockjs');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test:/\.(ttf|woff|svg|eot)$/,
        loader:'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@':path.resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    before(app){
      let navdata = [{
        id:0,
        title:'心动的鱼套餐'
      },{
        id:1,
        title:'心动的鱼'
      },{
        id:2,
        title:'好吃的凉菜'
      }];
      
      app.get('/elm/navlist',(req,res)=>{
          res.send(navdata)
      });
      app.get('/elm/content',(req,res)=>{
         let {id} = req.query;
         let cont = Mock.mock({
          'cont|10-15':[{
             'price|+1':(id+1)*10,
             'title':'商品标题',
             'info':'@cword',
             'img':'@image',
             'sale|30-100':1,
             'id|+1':id*15
          }]
        })
         res.send({
            navtitle:navdata[id].title,
            ...cont
         })
      })

      app.get('/api/list',(req,res,next)=>{
          let {pageid=0} = req.query; //1
          res.send(Mock.mock({
            'list|10':[{
              title:'@title',
              name:'@cname',
              img:"@image",
              'id|+1':pageid*10
            }]
          }))
      })
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
