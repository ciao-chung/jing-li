// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var fs = require('fs-extra')
var projectConfig = require('../static/config/config.json')
console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)
cp('-R', 'copyfile/.htaccess', config.build.assetsRoot)
cp('-R', 'copyfile/*', config.build.assetsRoot)

// 改寫api.json
var apiConfig = {
  dev: projectConfig.devApi,
  prod: projectConfig.prodApi,
}

fs.writeJson('static/config/api.json', apiConfig.prod, err => {
  console.log('api.json轉為prod模式');
})

webpack(webpackConfig, function (err, stats) {
  fs.writeJson('static/config/api.json', apiConfig.dev, err => {
    console.log('api.json轉為dev模式');
  })
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
