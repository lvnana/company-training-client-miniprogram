// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    riderCommentList: [{
      value: '新兵营',
      selected: true,
      title: '新兵营'
    }, {
      value: '生鲜小店',
      selected: false,
      title: '生鲜小店'
    }, {
      value: '储备干部',
      selected: false,
      title: '储备干部'
    }, {
      value: '服装',
      selected: false,
      title: '服装'
    }, {
      value: '餐饮',
      selected: false,
      title: '餐饮'
    }, {
      value: '电子商务',
      selected: false,
      title: '电子商务'
    }, {
      value: '泡泡电',
      selected: false,
      title: '泡泡电'
    }, {
      value: '未来之星',
      selected: false,
      title: '未来之星'
    }, {
      value: '收银小店',
      selected: false,
      title: '收银小店'
    }, {
      value: '活动策划',
      selected: false,
      title: '活动策划'
    }, {
      value: '营销推广',
      selected: false,
      title: '营销推广'
    }, {
      value: '门店',
      selected: false,
      title: '门店'
    }]
  },
  checkboxChange(e) {
    console.log('checkboxChange e:', e);
    let string = "riderCommentList[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.riderCommentList[e.target.dataset.index].selected
    })
    let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
    console.log('所有选中的值为：', detailValue)
  },
  writeTap: function() {
    wx.navigateTo({
      url: '/pages/published/published',
    })
  },
  circleFriendsTap:function() {
    wx.navigateTo({
      url: '/pages/CircleFriends/CircleFriends',
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