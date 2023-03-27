import { Configuration } from 'webpack'
import prodConfig from './webpack.prod'
import { merge } from 'webpack-merge'

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const smp = new SpeedMeasurePlugin()

const analyConfig: Configuration = smp.wrap(
  merge(prodConfig, {
    plugins: [
      new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
  })
)

export default analyConfig
