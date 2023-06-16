const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    devServer: {
        static: { directory: path.resolve(__dirname, "dist") },
        port: 2000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "To-do List",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
};