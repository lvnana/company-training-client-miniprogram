// pages/growth/growth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    strategyList: [
      {
        src: "/images/manual.png",
        title: '新员工手册',
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },
      {
        src: "/images/fresh.png",
        title: '商品保鲜',
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },
      {
        src: "/images/freshes.png",
        title: '生鲜陈列、标识标准',
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },
      {
        src: "/images/science.png",
        title: '科学定位商品',
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },
    ]
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