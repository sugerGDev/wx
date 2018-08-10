import {
  Http
} from '../utils/http.js'

class MainModel extends Http {
  getLatest(sCallBak) {
    this.request({
      uri: 'classic/latest',
      method: 'GET',
      success: (res) => {
          sCallBak(res)
      }
    })
  }

  



}

export {MainModel}