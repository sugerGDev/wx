// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      flag : {
        type : Boolean, 
        value : false,
        observer : function (event) {

        }
      },
      num : {
        type : Number,
        value : 0,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

    // 数据绑定
    // 三元表达式
    // 封装性，开放性
    // 粒度
    // 非常简单的功能，非常复杂的功能


 // image src
      likeImgSrc : 'images/like.png',
      likeDisImgSrc :   'images/like@dis.png',


      // // 记录当前like 数
      // num  : 9,
  
      // // 标记当前like是否点击
      // flag : false,
      
  },

  /**
   * 组件的方法列表
   */
  methods: {


    onLike: function (event) {

      let flag =  !this.properties.flag
      var num  =   this.properties.num
      num = flag ? ( num + 1) : ( num - 1)
      // pass vlaue
      this.setData({
        flag : flag,
        num : num
      }) 


      //激活点击事件
      let behavior = flag ? 'like' : 'cancel'
      this.triggerEvent('like',{
        'behavior':behavior
      },{})

    },
    

  }
})
