// pages/myFavorite/myFavorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['全部分类', 'PPT', 'MV', 'DOC', 'PPT', 'MV'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    strategyList: [
      {
        src: "/images/manual.png",
        title: '新员工手册',
        describe:'所属分类：典型案例分析',
        datatime: '发布日期：2019-2-14',
        type:'PPT'
      },
      {
        src: "/images/fresh.png",
        title: '商品保鲜及商品陈列规范',
        describe: '所属分类：典型案例分析',
        datatime: '发布日期：2019-2-14',
        type:'MV'
      },
      {
        src: "/images/freshes.png",
        title: '生鲜陈列、标识标准',
        describe: '所属分类：典型案例分析',
        datatime: '发布日期：2019-2-14',
        type:'DOC'
      },
      {
        src: "/images/science.png",
        title: '科学定位餐饮排列标识',
        describe: '所属分类：典型案例分析',
        datatime: '发布日期：2019-2-14',
        type: 'PPT'
      },
    ]
  },
  // 点击下拉显示框
  selectTap() {
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