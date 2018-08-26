//导入 config.js
import {
  httpConfig
} from '../utils/config.js'

// 错误码	含义
// 0	OK, 成功
// 1000	输入参数错误
// 1001	输入的json格式不正确
// 1002	找不到资源
// 1003	未知错误
// 1004	禁止访问
// 1005	不正确的开发者key
// 1006	服务器内部错误
// 200x 点赞类型

// 错误码	含义
// 2000	你已经点过赞了
// 2001	你还没点过赞
// 300x 期刊类型

// 错误码	含义
// 3000	该期内容不存在



const tips = {
  1: '抱歉， 出现一个错误',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  1007: 'URL不正确',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在',

}

class Http {
//ES6 对象解构
 request({uri,data = {},method='GET'}) {
   const httpThis = this;
    return new Promise((resolve,reject)=>{
      httpThis._request(uri, resolve, reject, method)
    }) 
 }

 _request(uri, resolve, reject, data = {},method='GET') {

    console.log('url >>>> ' + httpConfig.api_base_host + uri)
    console.log('appkey >>>>> ' + httpConfig.appkey)
    let httpThis = this;
    
    wx.request({

      url: httpConfig.api_base_host + uri,
      data: data,
      header: {
        'appKey': httpConfig.appkey,
        'content-type': 'application/json'
      },
      method: method,
      success: function(res) {

        console.log(res)

        // startsWith
        // endWith
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          //成功情况
           resolve(res.data)
        } else {
          reject()
          const error_code = res.data.error_code
          httpThis._show_error(error_code)
        }

      },
      fail: function(res) {
        reject()
        httpThis._show_error(1)
      },
    })
  }

   // 私用方法
   _show_error(errCode) {

    if (!errCode) {
      errCode = 1
    }

    const tip = tips[errCode]

    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000,
    })
  }
}











export {
  Http
}