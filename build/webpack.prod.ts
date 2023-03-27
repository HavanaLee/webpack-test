import { merge } from 'webpack-merge'
import baseConfig from './webpack.base'
import { Configuration } from 'webpack'
import copyWebpackPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

const prodConfig: Configuration = merge(baseConfig, {
    mode: 'production',
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vandors',
                    minSize: 0,
                    chunks: 'initial',  // 只提取初始化加载的
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    priority: 0,
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        },
        minimizer: [
            new CssMinimizerPlugin(),   // 压缩css
            new TerserWebpackPlugin({
                parallel: true, // 使用多进程并发运行以提高构建速度
                terserOptions: {
                    compress: true
                }
            })
        ]
    },
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist'),
                    filter: (source: string | string[]) => !source.includes('index.html')
                }
            ]
        }),
        // 提取css到单独的文件
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash].css'
        }),
        // gzip压缩
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/, // 只压缩js和css
            filename: '[path][base].gz',
            threshold: 8192,
            minRatio: 0.8
        })
    ]
})
export default prodConfig