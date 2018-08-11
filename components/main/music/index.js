// components/main/music/index.js
import { mainBeh } from '../main-beh.js'
const playMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [mainBeh],

  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   * 播放音乐 API 
   */
  data: {
    playSrc: 'images/player@play.png',
    pauseSrc: 'images/player@pause.png',
    playing: Boolean,
  },

  attached: function (event) {
    console.log('attached')
    this._recoverStatus()
    this._monitorSwitch()
  },

  detached: function (event) {
    console.log('detached')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function (event) {

      let playing = !this.data.playing;
      this.setData({
        playing: playing
      })

      if (playing) {
        playMgr.src = this.properties.src;
        playMgr.play()

      } else {
        playMgr.pause()
      }
      // play ? play.src = this.properties.src : play.pause()
    },

    _recoverStatus: function () {
      if (playMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }

      if (playMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch: function () {
      playMgr.onPlay(() => {
        this._recoverStatus()
      })

      playMgr.onPause(() => {
        this._recoverStatus()
      })

      playMgr.onStop(() => {
        this._recoverStatus()
      })

      playMgr.onEnded(() => {
        this._recoverStatus()
      })
    }


  }



})
