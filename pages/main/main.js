// pages/main/main.js
import { MainModel } from '../../models/main.js'
import { LikeModel } from '../../models/like.js'

let mainModel = new MainModel()
let likeModel = new LikeModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData: null,
    first: true,
    latest: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求 getlatest API
    mainModel.getLatest((res) => {
      this.setData({
        // mainData: res
        ...res
      })

      //... 预算符 把数据对象展开
      // console.log(this.data)
    })
  },

  //点击Like事件响应
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior;
    let artId = this.data.id;
    let category = this.data.type;
    likeModel.like(artId, behavior, category)
  },





  //Navi onNext 点击事件响应 回溯期刊逻辑
  onNext: function (event) {

    let idx = this.data.index;
    mainModel.getClassic(idx, true, (res) => {
      this._updateClassicRes(res)
    })
  },


  //Navi onPrev 点击事件响应 找寻前期刊逻辑
  onPrev: function (event) {

    let idx = this.data.index

    mainModel.getClassic(idx, false, (res) => {
      this._updateClassicRes(res)
    })
  },



  _updateClassicRes: function (res) {

    this.setData({
      ...res,
      latest: mainModel.isLatest(res.index),
      first: mainModel.isFirst(res.index)
    })
    this._getLikeStatus(res.id, res.type)

  },

  _getLikeStatus(artId, category) {
    // 获取当前 like 状态
    likeModel.getLikeStatus(artId, category, (res) => {
      // 更新数据
      this.setData({
        fav_nums: res.fav_nums,
        like_status: res.like_status
      })

    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



})