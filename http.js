//导入 config.js
import { httpConfig } from '/config.js'


class Http {
  request(param) {
    if (!param.method) {
      param.method = 'GET'
    }


    wx.request({
      url: httpConfig.api_base_host + param.uri,
      data: param.data,
      header: httpConfig.appkey,
      method: param.method,
      // dataType: 'json',
      // responseType: 'text',
      success: function(res) {

        let code = res.statusCode
        if (code.startstWith('2')) {
          //成功情况
        }

      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  }
}
export { http }