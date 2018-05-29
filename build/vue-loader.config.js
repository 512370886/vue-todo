//const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) =>{
    return {
        preserveWhitepace: true,     //vue模板里，清除多余的空格（因为多余的空格会渲染到页面上，不太好）
        extractCSS:!isDev,      //将vue里的css单独打包成一个文件（这项设置，看个人需要）
        cssModules:{
        	localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        	camelCase: true
        }
//      hotReload: false   根据环境变量生成
//      loaders: {
//      	'docs': docsLoader
//      }
    }
}