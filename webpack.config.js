const path = require("path")
module.exports = {
    mode: 'development',
    //entry configeration
    entry: {
        // main address
        main: '../webpack/main.js'
    },
    output: {
        //pack path
        path: path.resolve(__dirname, '../webpack'),
        //pack name,
        // you can use '[name].js' instead of 'bundle.js'
        filename: 'bundle.js'
    },
    //module:CSS,image
    module: {
        rules: [
            //css loader
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