// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    rootlist:[
      {
        src:'/images/degreeicon.png',
        title:'伊藤员工学位制度',
        url: '/pages/degreeSystem/degreeSystem',
      },

      {
        src: '/images/Problemicon.png',
        title: '问题反馈',
        url: '/pages/Feedbackpage/Feedbackpage',
      },
      {
        src: '/images/passwordicon.png',
        title: '密码修改',
        url: '/pages/Changepassword/Changepassword',
      },
      {
        src: '/images/medalicon.png',
        title: '我的勋章',
        url: '/pages/myMedal/myMedal',
      },
      {
        src: '/images/treeicon.png',
        title: '我的成长树',
        url: '/pages/Growingtree/Growingtree',
      },
      {
        src: '/images/watchicon.png',
        title: '观看历史',
        url: '/pages/WatchHistory/WatchHistory',
      },
      {
        src: '/images/checkicon.png',
        title: '考核记录',
        url: '/pages/ApprovedMemo/ApprovedMemo',
      },
      {
        src: '/images/collecticon.png',
        title: '我的收藏',
        url: '/pages/myFavorite/myFavorite',
      },
      {
        src: '/images/integralicon.png',
        title: '积分明细',
        url: '/pages/IntegralDetail/IntegralDetail',
      },
      {
        src: '/images/Integralmallicon.png',
        title: '积分商城',
        url: '/pages/IntegralMall/IntegralMall',
      },
      {
        src: '/images/converticon.png',
        title: '兑换记录',
        url: '/pages/ForRecord/ForRecord',
      },
      // {
      //   src: '/images/updateicon.png',
      //   title: '检查更新',
      // },

    ]
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });

  },
  BasicInfoTap: function() {
    wx.navigateTo({
      url: '/pages/BasicInfo/BasicInfo',
    })
  },
  //  degreeSystemTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/degreeSystem/degreeSystem',
  //    })
  //  },
  // FeedbackTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/Feedbackpage/Feedbackpage',
  //   })
  // },
  // ChangepasswordTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/Changepassword/Changepassword',
  //   })
  // },
  // WatchHistoryTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/WatchHistory/WatchHistory',
  //   })
  // },
  // ApprovedMemoTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/ApprovedMemo/ApprovedMemo',
  //   })
  // },
  // myFavoriteTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/myFavorite/myFavorite',
  //   })
  // },
  // myMedalTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/myMedal/myMedal',
  //   })
  // },
  // IntegralMallTap: function() {
  //   wx.navigateTo({
  //     url: '/pages/IntegralMall/IntegralMall',
  //   })
  // },
  // IntegralDetailTap:function(){
  //   wx.navigateTo({
  //     url: '/pages/IntegralDetail/IntegralDetail',
  //   })
  // },
  // ForRecordTap: function () {
  //   wx.navigateTo({
  //     url: '/pages/ForRecord/ForRecord',
  //   })
  // },
  // GrowingtreeTap:function(){
  //   wx.navigateTo({
  //     url: '/pages/Growingtree/Growingtree',
  //   })
  // },
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