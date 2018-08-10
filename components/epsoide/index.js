// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      index : {
        type : Number,
        value : 0,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      year : 0,
      month : "",
  },

  attached : function() {
      console.log('year ' + this.data.year + ' month ' + this.data.month)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
