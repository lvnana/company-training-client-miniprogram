// pages/examine/examine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'CHN',
        value: '休闲食品小店销售/休闲食品小店工时',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '食品小店销售额/食品小店工时'
      },
    ],
    itemes: [{
        name: 'CHN',
        value: '当月月累计销售额/去年同期月累计销售额（剔除门店服装等其他销售）',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '当月日均销售额/去年同期月累计销售额'
      },
      {
        name: 'BRA',
        value: '当月月累计销售额/去年同期月累计销售额（剔除门店服装等其他销售）'
      },
    ],
    itemlist: [{
        name: 'CHN',
        value: '当月月累计销售额/去年同期月累计销售额（剔除门店服装等其他销售）',
        checked: 'true',
      },
      {
        name: 'BRA',
        value: '当月日均销售额/去年同期月累计销售额'
      },
      {
        name: 'BRA',
        value: '当月月累计销售额/去年同期月累计销售额（剔除门店服装等其他销售）',
        checked: 'true',
      },
    ]
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
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