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
    mainData : null,
    first: true,
    latest : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求 getlatest API
    mainModel.getLatest((res)=>{
      this.setData({
        mainData : res
      })
    })
  },
  
  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior;
    let artId = this.data.mainData.id;
    let category = this.data.mainData.type;
    likeModel.like(artId,behavior,category)
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