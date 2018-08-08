//导入 config.js
import {
  httpConfig
} from '/config.js'

class Http {
  request(param) {

    if (!param.method) {
      param.method = 'GET'
    }

    console.log('url >>>> ' + httpConfig.api_base_host + param.uri)
    console.log('appkey >>>>> ' + httpConfig.appkey)

    wx.request({
      url: httpConfig.api_base_host + param.uri,
      data: param.data,
      header: {
        'appKey': httpConfig.appkey,
        'content-type': 'application/json'
      },
      method: param.method,
      // dataType: 'json',
      // responseType: 'text',
      success: function(res) {

        console.log(res);

        let code = res.statusCode.toString()
        if (code.startstWith('2')) {
          //成功情况
          param.success(res);
        }

      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  }
}
export {
  Http
}