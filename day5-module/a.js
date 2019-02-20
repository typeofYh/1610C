const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bodyParse = require('body-parser');
const webpack = require('webpack');
const config = {
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'build'),//必须要写绝对路径
        filename:"index.js"
    },
    devServer:{
        port:8080,
        open:true,
        hot:true,
        // contentBase:path.join(__dirname,'src')
        before(app){
            app.use(bodyParse.json());
            app.get('/api/list',(req,res,next)=>{
                res.send({name:'zs'})
            })
            app.post('/api/login',(req,res,next)=>{
                console.log(req.body);
                res.send({name:'zs'})
            })
        }
    },
    module:{ //解析非js文件的模块
        rules:[ //规则
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test:/\.css$/,  //要匹配的文件类型 regexp
                use:['style-loader','css-loader'] //该类型文件要加载的loader
            },
            {
                test:/\.(png|jpe?g|gif|bmp)$/,
                use:{
                    loader:'file-loader'
                }
            },
            {
                test:/\.(ttf|eot|woff|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:20480  //指定文件大小
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        }),
        //模块热替换
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config; //抛出配置对象

//webpack --config=


//es6 模块规范
//commonjs 服务端
//AMD CMD 浏览器端
