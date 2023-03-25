import { merge } from 'webpack-merge'
import baseConfig from './webpack.base'
import { Configuration } from 'webpack'
import copyWebpackPlugin from 'copy-webpack-plugin'

import * as path from 'path'

const prodConfig: Configuration = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist'),
                    filter: (source: string | string[]) => !source.includes('index.html')
                }
            ]
        })
    ]
})
export default prodConfig