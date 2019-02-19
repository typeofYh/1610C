webpack是一个模块打包器

会把 .ejs .jsx .hds 
.css  .sass  .scss .less 


1. 全局安装 webpack

设置npm下载源地址
npm config set registry http://registry.npm.taobao.org/
设置npm全局安装地址
npm config set prefix 本地文件夹路径
NODE_PATH 
PATH
设置npm缓存地址
npm config set cache 本地文件路径

.npmrc

npm i webpack webpack-cli -g


2. 创建webpack配置文件默认文件名为webpack.config.js

3. webpack 配置项
```
{
    entry入口
    entry:文件路径 || {
        
    }
    output输出
    output:{
        path:要输出的路径, dist
        filename:输出的文件名  main.js
    },
    module:{
        rules:{
            loader
        }
    },
    plugins:[ //插件

    ],
    devServer:{

    }
}


```

4. 运行webpack
```
webpack --config=要运行的文件路径
```
5. webpack 起本地服务
```
1. 下载
npm install webpack-dev-server -D

devServer:{
    open:true,
    port:8080
    contentBase:服务基础路径
}
```

> module

es6 模块规范  静态加载
```
import 引入
```
```
export 抛出
```

commonjs 运行时加载

> mode
production 生产环境
development 开发环境


babel-loader 8
@babel/preset-env
@babel/core


plugin 

1.下载插件
html-webpack-plugin 自动构建html文件 自动引入入口文件
2. 引入插件

模块热更新