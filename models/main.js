import {
  Http
} from '../utils/http.js'

class MainModel extends Http {

  getLatest(sCallBak) {
    this.request({
      uri: 'classic/latest',
      success: (res) => {
          sCallBak(res)
          this._setFirstIndex(res.index)
      }
    })
  }



  getClassic(index,isNext, sCallBak) {
    this.request({
      uri : 'classic/' + index + (isNext ? '/next': '/previous'),
      success:(res) => {
        sCallBak(res)
      }
    })
  }

  isFirst(index) {
    let firstIndex = this._getFirstIndex()
     return (firstIndex == index) ? true : false
  }

  isLatest(index) {
    return (index == 1) ? true : false
  }


  _setFirstIndex(index) {
    wx.setStorageSync('latest',index)
  }

  _getFirstIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }


}

export {MainModel}