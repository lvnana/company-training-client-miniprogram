Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: '/images/Bulletin_details_one.png' },
      { url: '/images/Bulletin_details_one.png' },

    ],
    currentTab: 0,
  },

  /**
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
  leftClick: function (e) {
    var currentTab = this.data.currentTab;
    var mos = this.data.movies.length - 1;

    currentTab = currentTab == 0 ? mos : Number(currentTab - 1)

    this.setData({
      currentTab: currentTab
    });
  },
  rightClick: function () {
    var currentTab = this.data.currentTab;
    var mos = this.data.movies.length - 1;
    currentTab = currentTab >= mos ? 0 : Number(currentTab + 1)
    console.log(currentTab)
    this.setData({
      currentTab: currentTab
    });
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