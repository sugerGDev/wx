import {
  Http
} from '../utils/http.js'

class MainModel extends Http {

  getLatest(sCallBak) {
    this.request({
      uri: 'classic/latest',
      success: (res) => {
        sCallBak(res)

        let latestId = res.index
        //保存最新index
        this._setFirstIndex(latestId)
        // 保存当前最新期刊数据
        this._setResValue(this._getResKey(latestId),res)
      }
    })
  }


  getClassic(index, isNext, sCallBak) {

    // 缓存中寻找 or  api 写入缓存中
    // key  确定 key

    let key = isNext ?  this._getResKey(index + 1) : this._getResKey(index - 1)
    console.log('res key >>>> ' + key);
    let classic = wx.getStorageSync(key.toString());
    if (classic) {
      sCallBak(classic)
      return
    }

    let path = isNext ? 'next' : 'previous';
    this.request({
      uri: `classic/${index}/${path}`,
      success: (res) => {
        //保存数据
        this._setResValue(this._getResKey(res.index), res)

        // 回调数据
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
    wx.setStorageSync('latest', index)
  }

  _getFirstIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }

  _setResValue(index, res) {
    //保存 数据
    wx.setStorage({
      key: index,
      data: res,
    })
  }

  _getResKey(index) {
    let k =  `classic_${index}`
    return k.toString();
  }
}

export { MainModel }