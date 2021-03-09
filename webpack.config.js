const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        //打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件
        filename: 'bundle.js',
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                "chrome": "58",
                                "ie": "11"
                            },
                            "corejs": "3",
                            "useBuiltIns": "usage"
                        }]
                    ]
                }
            }, 'ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                'postcss-preset-env',
                                {
                                    browsers: 'last 2 versions'
                                }
                            ]
                        ]
                    }
                }
            }, 'less-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}