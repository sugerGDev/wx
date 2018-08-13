// pages/book/book.js
import {BookModel} from "../../models/book.js"
const  bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // //promise 对象
    // const promise = new Promise((resolve, reject) => {
    //   // pending, fulfilled rejected
    //   // 进行中，   已成功      已失败   
    //   // 一旦调用，则凝固

    //   wx.getSystemInfo({
    //     success: res => resolve(res),
    //     fail: err => reject(err)
    //   })
    // })

    // //  获取 promise 结果
    // promise.then(
    //   res => console.log(res),
    //   err => console.error(err)
    // )


    const promise = bookModel.getHotList()

    promise.then(
      res=> {
        console.log(res)
      },
      err=>{
        console.error(err)
      }
    )


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

  }
})