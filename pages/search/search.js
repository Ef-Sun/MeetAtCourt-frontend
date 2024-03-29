// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameList:[//status 表示参与活动的状态， show 表示文本信息的展示状态
      {id: 1, date: '2021-2-19', playground: '共青场', 
      img: '../../images/background/user1.png',
      name: '小A', num: 3, status: true, show: false,
      msg: '这里又一个新的排球活动，快来打球吧！'},
      {id: 2, date: '2021-1-30', playground: '二附中操场', 
      img: '../../images/background/user2.png',
      name: '小B', num: 9, status: false, show:false,
      msg: '这里又一个新的排球活动，快来打球吧！'},
      {id: 3, date: '2020-12-7', playground: '大活二楼', 
      img: '../../images/background/user3.png',
      name: '小C', num: 12, status: true, show:false,
      msg: '这里又一个新的排球活动，快来打球吧！'}
    ]

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

  },
  changShow: function(e){
    var index = e.currentTarget.dataset.index;
    var show = "gameList["+index+"].show";
    var value = this.data.gameList[index].show;
    this.setData({
      [show] : !value
    })
  },
  changeStatus: function(e){
    var index = e.currentTarget.dataset.index;
    var status="gameList["+index+"].status";
    var value= this.data.gameList[index].status;
    //console.log(value);
    this.setData({
       [status]: !value
    })
    //console.log(this.data.gameList[index].status);
  }
})