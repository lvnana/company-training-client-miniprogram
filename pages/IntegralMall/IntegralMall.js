Page({

  /**
   * 页面的初始数据
   */
  data: {
    strategyList: [{
      src: "/images/convert_A.png",
        title: '陶瓷餐具套装',
        describe: '800积分',
        remainingnum: '剩15件',
        isChange: '正在抢兑中',
        nowisChange: '立即兑换'
      },
      {
        src: "/images/convert_B.png",
        title: '牙膏牙刷组合装',
        describe: '300积分',
        remainingnum: '剩36件',
        isChange: '正在抢兑中',
        nowisChange: '立即兑换'
      },
      {
        src: "/images/convert_E.png",
        title: '生鲜陈列、标识标准',
        describe: '1500积分',
        remainingnum: '剩15件',
        isChange: '正在抢兑中',
        insufficient: '积分不足',
      },
      {
        src: "/images/convert_F.png",
        title: '滋润保湿护手霜',
        describe: '2000积分',
        remainingnum: '剩15件',
        countdown: '倒计时：24：30：15',
        startSoon: '即将开始',
      },
    ],
    imgUrls: [
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
    ],

  },
  IntegralDetailTap: function() {
    wx.navigateTo({
      url: '/pages/IntegralDetail/IntegralDetail',
    })
  },
  ForRecordTap: function() {
    wx.navigateTo({
      url: '/pages/ForRecord/ForRecord',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var array = this.data.arr
    // for (let i = 1; i < 3; i++) {
    //   array.push("images/" + i + ".png")
    // }
    // this.setData({ arr: array })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },


})