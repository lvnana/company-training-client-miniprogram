// pages/goodLesson_details/goodLesson_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
  },
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  }, checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  startStudy: function () {
    wx.navigateTo({
      url: '/pages/lessonStudy/lessonStudy',
    })
  },
  enjoytap: function () {
    wx.navigateTo({
      url: '/pages/exceptional/exceptional',
    })
  },
  examineTap: function () {
    wx.navigateTo({
      url: '/pages/examine/examine',
    })
  },
  /**{}
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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