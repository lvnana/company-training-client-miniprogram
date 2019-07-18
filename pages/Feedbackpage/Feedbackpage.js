// pages/Feedbackpage/Feedbackpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{
        id: 1,
        name: '播放'
      }, {
        id: 2,
        name: '上传'
      }, {
        id: 3,
        name: '缓存'
      }, {
        id: 4,
        name: '广告'
      }, {
        id: 5,
        name: '搜素'
      }, {
        id: 6,
        name: '投屏'
      }, {
        id: 7,
        name: '会员'
      }, {
        id: 8,
        name: '首页'
      },
      {
        id: 9,
        name: '发现'
      },
      {
        id: 10,
        name: '意见'
      },
      {
        id: 11,
        name: '其他'
      },
    ],
    msg: '',
    img_url: [],
    content: '',
    // riderCommentList: [{
    //   value: '播放',
    //   selected: true,
    //   title: '播放'
    // }, {
    //   value: '上传',
    //   selected: false,
    //   title: '上传'
    // }, {
    //   value: '缓存',
    //   selected: false,
    //   title: '缓存'
    // }, {
    //   value: '广告',
    //   selected: false,
    //   title: '广告'
    // }, {
    //   value: '搜索',
    //   selected: false,
    //   title: '搜索'
    // }, {
    //   value: '投屏',
    //   selected: false,
    //   title: '投屏'
    // }, {
    //   value: '会员',
    //   selected: false,
    //   title: '会员'
    // }, {
    //   value: '首页',
    //   selected: false,
    //   title: '首页'
    // }, {
    //   value: '发现',
    //   selected: false,
    //   title: '发现'
    // }, {
    //   value: '意见',
    //   selected: false,
    //   title: '意见'
    // }, {
    //   value: '其他',
    //   selected: false,
    //   title: '其他'
    // }]
  },
  QuestionAnswerTap: function() {
    wx.navigateTo({
      url: '/pages/QuestionAnswer/QuestionAnswer',
    })
  },
  // checkboxChange(e) {
  //   console.log('checkboxChange e:', e);
  //   let string = "riderCommentList[" + e.target.dataset.index + "].selected"
  //   this.setData({
  //     [string]: !this.data.riderCommentList[e.target.dataset.index].selected
  //   })
  //   let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
  //   console.log('所有选中的值为：', detailValue)
  // },

  radioButtonTap: function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    for (let i = 0; i < this.data.buttons.length; i++) {
      if (this.data.buttons[i].id == id) {
        //当前点击的位置为true即选中
        this.data.buttons[i].checked = true;
      } else {
        //其他的位置为false
        this.data.buttons[i].checked = false;
      }
    }
    this.setData({
      buttons: this.data.buttons,
      msg: "id:" + id
    })
  },



  input: function(e) {
    this.setData({
      content: e.detail.value
    })
  },
  chooseimage: function() {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function(res) {

        if (res.tempFilePaths.length > 0) {

          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }

          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })

        }

      }
    })
  },
  //发布按钮事件
  send: function() {
    var that = this;
    var user_id = wx.getStorageSync('userid')
    wx.showLoading({
      title: '上传中',
    })
    that.img_upload()
  },
  //图片上传
  img_upload: function() {
    let that = this;
    let img_url = that.data.img_url;
    let img_url_ok = [];
    //由于图片只能一张一张地上传，所以用循环
    for (let i = 0; i < img_url.length; i++) {
      wx.uploadFile({
        //路径填你上传图片方法的地址
        url: 'http://wechat.homedoctor.com/Moments/upload_do',
        filePath: img_url[i],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function(res) {
          console.log('上传成功');
          //把上传成功的图片的地址放入数组中
          img_url_ok.push(res.data)
          //如果全部传完，则可以将图片路径保存到数据库
          if (img_url_ok.length == img_url.length) {
            var userid = wx.getStorageSync('userid');
            var content = that.data.content;
            wx.request({
              url: 'http://wechat.homedoctor.com/Moments/adds',
              data: {
                user_id: userid,
                images: img_url_ok,
                content: content,
              },
              success: function(res) {
                if (res.data.status == 1) {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提交成功',
                    showCancel: false,
                    success: function(res) {
                      if (res.confirm) {
                        wx.navigateTo({
                          url: '/pages/my_moments/my_moments',
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        },
        fail: function(res) {
          console.log('上传失败')
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.buttons[0].checked = true;
    this.setData({
      buttons: this.data.buttons,
    })
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