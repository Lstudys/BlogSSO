/**
 * 配置跨域代理等信息
 * created by 李永晖 on 2021/11/26
 */

module.exports = {
    devServer:{
      open:true,
      proxy:{
        [process.env.VUE_APP_BASE_API]:{
          target:process.env.VUE_APP_URL,
          changeOrigin:true,
          pathRewrite:{
            ['^' + process.env.VUE_APP_BASE_API]: ''
          }
        }
      }
    }
  }