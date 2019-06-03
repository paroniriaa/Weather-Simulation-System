const HtmlwebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module:{
        rules:[
            {
                test: /\/js$/,
                exclude: /node-modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            
            {
                test:/\.html$/,
                   use:[
                       {
                       loader: "html-loader",
                       options: { minimize: true }
                       }
                   
                    ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

        ]
    },

     
    plugins:[
        new HtmlwebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}