import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const styleLoadersArray = [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: "[path][name]__[local]--[hash:5]",
            },
        },
    },
];


const baseConfig: Configuration = {
    entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
    // 打包出口文件
    output: {
        filename: "static/js/[name].js", // 每个输出js的名称
        path: path.join(__dirname, "../dist"), // 打包结果输出路径
        clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
        publicPath: isDev ? "/" : './', // 打包后文件的公共前缀路径
    },
    // loader 配置
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: 'babel-loader',
                exclude: [path.join(__dirname, 'node_modules')]
            },
            {
                test: /\.s[ac]ss$/i, //匹配 css 文件
                use: [
                    ...styleLoadersArray,
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                modules: true,  // 可以加入modules: true，这样就不需要在sass文件名加module了
                                importLoaders: 2,


                            }
                        }
                    }

                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'static/images/[hash][ext][query]'
                }
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            cache: false,
            hash: true,
            inject: true,
            // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
            template: path.join(__dirname, "../public/index.html"),
            // 压缩html资源
            minify: {
                collapseWhitespace: true, //去空格
                removeComments: true, // 去注释
                removeAttributeQuotes: true
            },

        }),
        new MiniCssExtractPlugin({
            filename: isProd ? 'static/css/[name].[contenthash].css' : '[name].css'
        })
    ],
};

export default baseConfig