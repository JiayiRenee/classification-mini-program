// pages/legend/legend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonelist:[
      '/pages/images/khsw.png',
      '/pages/images/yhlj.png',
      '/pages/images/cylj.png',
      '/pages/images/qtlj.png'
    ], //轮播图片列表
    indicatorDots: true,//是否显示面板指示点
    autoplay: false,//是否自动切换
    circular:true,//是否采用衔接滑动
    interval: 2000,//自动切换时间间隔
    duration: 1000,//滑动动画时长
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

  toComment1() {
    var query =  wx.createSelectorQuery();//创建节点查询器
    query.select('#khsw').boundingClientRect();//选择id为khsw的节点并查询的它布局位置
    query.exec(function(res) {//执行请求
      wx.pageScrollTo({
        scrollTop: res[0].top,//滚动到页面节点的上边界坐标
        duration: 300   // 滚动动画的时长
      });
    })
  },
  toComment2() {
    var query =  wx.createSelectorQuery();//创建节点查询器
    query.select('#yhlj').boundingClientRect();//选择id为yhlj的节点并查询的它布局位置
    query.exec(function(res) {//执行请求
      wx.pageScrollTo({
        scrollTop: res[0].top,//滚动到页面节点的上边界坐标
        duration: 300   // 滚动动画的时长
      });
    })
  },
  toComment3() {
    var query =  wx.createSelectorQuery();//创建节点查询器
    query.select('#cylj').boundingClientRect();//选择id为cylj的节点并查询的它布局位置
    query.exec(function(res) {//执行请求
      wx.pageScrollTo({
        scrollTop: res[0].top,//滚动到页面节点的上边界坐标
        duration: 300   // 滚动动画的时长
      });
    })
  },
  toComment4() {
    var query =  wx.createSelectorQuery();//创建节点查询器
      query.select('#qtlj').boundingClientRect();//选择id为qtlj的节点并查询的它布局位置
      query.exec(function(res) {//执行请求
        wx.pageScrollTo({
          scrollTop: res[0].top,//滚动到页面节点的上边界坐标
          duration: 300   // 滚动动画的时长
        });
      })
  }, 
})