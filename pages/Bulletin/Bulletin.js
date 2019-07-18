// pages/Bulletin/Bulletin.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['全部','2019', '2018', '2017', '2016', '2015', '2014'],//下拉列表的数据
    selectDataes: ['全部', '1', '2', '3', '4', '5', '6'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    IssuenumList:[
      {
    
        src: '/images/issue_one.png',
        issuenum:'2019年第一刊',
        readicon: '/images/readnum.png',
        readnum:'23695',
        url: '/pages/Bulletin_details/Bulletin_details',
      },
      {
        src: '/images/issue_two.png',
        issuenum: '2019年第一刊',
        readicon: '/images/readnum.png',
        readnum: '23695',
        url: '/pages/Bulletin_details/Bulletin_details',
      },
      {
        src: '/images/issue_three.png',
        issuenum: '2019年第一刊',
        readicon: '/images/readnum.png',
        readnum: '23695',
        url: '/pages/Bulletin_details/Bulletin_details',
      },
    ]
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉显示框
  selectTaps() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

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