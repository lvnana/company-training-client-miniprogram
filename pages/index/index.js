//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    newsList: [{
        titles: '[新闻]成都伊藤洋华堂绿地店开业XXXXXXXXX',
        datas: '2018/12-26',
        times: '17:32',
        url: '/pages/Information_details/Information_details',
      },
      {
        titles: '[资讯]成都伊藤洋华堂绿地店开业XXXXXXXXX',
        datas: '2018/12-26',
        times: '17:32',
        url: '/pages/Information_details/Information_details',
      },
      {
        titles: '[新闻]成都伊藤洋华堂绿地店开业XXXXXXXXX',
        datas: '2018/12-26',
        times: '17:32',
        url: '/pages/Information_details/Information_details',
      },
      {
        titles: '[通知]成都伊藤洋华堂绿地店开业XXXXXXXXX',
        datas: '2018/12-26',
        times: '17:32',
        url: '/pages/Information_details/Information_details',
      },
      {
        titles: '[新闻]成都伊藤洋华堂绿地店开业XXXXXXXXX',
        datas: '2018/12-26',
        times: '17:32',
        url: '/pages/Information_details/Information_details',
      },


    ],
    imgUrls: [
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
      '/images/swiper-banner.png',
    ],
    iconList1: [{
        src: '/images/icon_growth.png',
        name: '成长教练',
        url: '/pages/growth/growth'
      },
      {
        src: '/images/icon_speedup.png',
        name: '能力提升',
        url: '/pages/speedup/speedup'
      },

      {
        src: '/images/icon_staff.png',
        name: '员工进阶',
        url: '/pages/staff/staff'
      },

      {
        src: '/images/icon_Bulletin.png',
        name: '企业社刊',
        url: '/pages/Bulletin/Bulletin'
      }
    ],
    iconList2: [{
        src: '/images/icon_information.png',
        name: '新闻资讯',
        url: '/pages/Information/Information'
      },
      {
        src: '/images/icon_case.png',
        name: '案例中心',
        url: '/pages/case/case'
      },
      {
        src: '/images/icon_promote.png',
        name: '专项推广',
        url: '/pages/promote/promote'
      },
      {
        src: '/images/icon_goodlist.png',
        name: '好课榜',
        url: '/pages/goodLesson/goodLesson'
      },
    ],
    scrollviewList: [{
        src: "/images/slide_one.png",
        time: '2019年2月',
        url: '/pages/Bulletin_details/Bulletin_details'
      },
      {
        src: "/images/slide_two.png",
        time: '2019年2月',
        url: '/pages/Bulletin_details/Bulletin_details'
      },
      {
        src: "/images/slide_three.png",
        time: '2019年2月',
        url: '/pages/Bulletin_details/Bulletin_details'
      },
      {
        src: "/images/slide_four.png",
        time: '2019年2月',
        url: '/pages/Bulletin_details/Bulletin_details'
      },
      {
        src: "/images/slide_five.png",
        time: '2019年2月',
        url: '/pages/Bulletin_details/Bulletin_details'
      }
    ],

    courseList: [{
        src: "/images/course_banner.png",
        title: '新员工手册',
        describe: "新员工手册文字内容描述新员工手册文字内容描述",
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },
      {
        src: "/images/course_banner.png",
        title: '新员工手册',
        describe: "新员工手册文字内容描述新员工手册文字内容描述",
        timeicon: '/images/datatime.png',
        readicon: '/images/readnum.png',
        datatime: '2019-2-14',
        readnum: "23695",
        url: '/pages/LatestCourse_Details/LatestCourse_Details'
      },

    ]

  },
  SigninPageTap: function() {
    wx.navigateTo({
      url: '/pages/SigninPage/SigninPage',
    })
  },
  informationTap: function() {
    wx.navigateTo({
      url: '/pages/Information/Information',
    })
  },
  BulletinTap: function() {
    wx.navigateTo({
      url: '/pages/Bulletin/Bulletin',
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