const path = require("path")
module.exports = {
    // 通过选择 development 或 production 之中的一个
    mode: 'development',
    // entry configeration
    // 入口起点(entry point)指示 webpack 应该使用哪个模块
    entry: {
        // main address
        main: '../webpack/main.js'
    },
    // output 属性告诉 webpack 在哪里输出它所创建的 bundles
    output: {
        // pack path
        path: path.resolve(__dirname, '../webpack'),
        // pack name,
        // you can use '[name].js' instead of 'bundle.js'
        filename: 'bundle.js'
    },
    // loader 让 webpack 能够去处理那些非 JavaScript 文件
    // （webpack 自身只理解 JavaScript）
    // module:CSS,image
    module: {
        rules: [
            //css loader
            // test 属性，用于标识出应该被对应的 loader 
            // 进行转换的某个或某些文件。
            // use 属性，表示进行转换时，应该使用哪个 loader。
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //pic loader
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    //plugins
    // 插件需要require()它之后使用new操作符来创建它的一个实例
    plugins: [],
    //webpack development
    devServer: {
        //server path
        contentBase: path.resolve(__dirname, '../webpack'),
        //server ip
        host: 'localhost',
        //is compress
        compress: true,
        //ip port
        port: 8080
    }
}