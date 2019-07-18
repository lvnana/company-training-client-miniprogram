// pages/Date/ShowDate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: '',
    month: '',
    day: '',
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    firstDay: '',
    lastDay: '',
    monthFitstDayWeek: '',
    selectDate: ''
  },

  //获取当前日期
  getDate: function () {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    this.currentMonth(year, month, myDate.getDate());
  },

  //上一个月
  prevMonth: function () {
    var months = this.data.month - 1;
    var years = this.data.year;
    if (months == 0) {
      years -= 1;
      months = 11;
    } else {
      months -= 1;
    }
    this.currentMonth(years, months, this.data.day);
  },

  //下一个月
  nextMonth: function () {
    var year = this.data.year;
    var nowMonth = this.data.month - 1;
    if (nowMonth == 11) {
      year += 1;
      nowMonth = 0;
    } else {
      nowMonth += 1;
    }
    this.currentMonth(year, nowMonth, this.data.day);
  },

  //月份计算 year:要计算的年份,nowMonth：要计算的月份
  currentMonth: function (year, month, day) {
    //console.log(year + ' ' + month + ' ' + day);
    //当月的第一天
    var first = new Date(year, month, 1);
    //this.data.firstDay = first.getDate();
    //当月的最后一天
    var last = new Date(year, month + 1, 0);
    //this.data.lastDay = last.getDate;

    this.setData({
      year: year,
      month: month + 1,
      day: day,
      firstDay: first.getDate(),
      lastDay: last.getDate(),
      monthFitstDayWeek: first.getDay()
    });

    this.data.dateArr = [];
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      this.data.dateArr.push({
        isToDay: i == day ? true : false,
        dateNum: i
      });
    }
    this.setData({
      dateArr: this.data.dateArr
    });

    //选中的日期
    var week = this.data.weekArr[(new Date(this.data.year, this.data.month - 1, this.data.day)).getDay()];
    this.setData({
      selectDate: this.data.year + '-' + this.data.month + '-' + this.data.day + '  周' + week
    });
  },


  //选中日期
  CurrentDay: function (event) {
    //console.log(event);
    var ctDay = event.currentTarget.dataset.currentday.dateNum;
    //console.log(ctDay);
    var newArr = this.data.dateArr;
    for (var i = 0; i < newArr.length; i++) {
      newArr[i].isToDay = false;
      if (i == ctDay - 1) {
        newArr[i].isToDay = true;
      }
    }
    this.setData({
      dateArr: newArr
    });

    //选中的日期
    var week = this.data.weekArr[(new Date(this.data.year, this.data.month - 1, ctDay)).getDay()];
    this.setData({
      selectDate: this.data.year + '-' + this.data.month + '-' + ctDay + '  周' + week
    });

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate();
    //this.setDate();
    var res = wx.getSystemInfoSync();
    // this.setData({
    //   param: res.windowHeight / 12
    // });
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

  },

})
