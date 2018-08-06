var path=require("path");
const { VueLoaderPlugin } = require('vue-loader');


module.exports={
    entry:{
        app:"./app/js/main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: process.env.PORT,
        host: "0.0.0.0",
        https: true
    },
    module:{
        rules:[{
            test:/\.html$/,
            loader:"html-loader"
        },{
            test:/\.vue$/,
            loader:"vue-loader"
        },{
            test:/\.scss$/,
            loader:"style-loader!css-loader!sass-loader"
        }]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    output:{
        filename:"[name].min.js",
        path:path.resolve(__dirname,"dist")
    },
    mode:"development"
};