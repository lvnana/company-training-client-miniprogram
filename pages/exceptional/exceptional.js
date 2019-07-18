// pages/exceptional/exceptional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    items: [{
      name: 'CHN',
      value: '支付宝',
      src:'/images/Alipay.png',
      checked: 'true',
    },
    {
      name: 'BRA',
      value: '微信',
      src: '/images/weixinicon.png',
    },
    ],
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });

  },
  myexceptionalTap: function() {
    wx.navigateTo({
      url: '/pages/myexceptionalRecord/myexceptionalRecord',
    })
  },

  confirmpayTap: function() {
    wx.navigateTo({
      url: '/pages/exceptionalSuccess/exceptionalSuccess',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})