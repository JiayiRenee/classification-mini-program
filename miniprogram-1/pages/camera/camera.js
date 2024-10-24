// camera.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    picturePathLocal:"",
    showPic: true,
    itemhide:false,

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  takePhoto() {
    var that=this;
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log('temp photo path:',res.tempImagePath);
        this.setData({
          src: res.tempImagePath,
          photoTaken:true,
        });
　　　　　//插入上传代码段 
        that.uploadPhoto(res.tempImagePath);
      }
    })
  },
  
  restartCamera(){
    this.setData({
    src: '',
    photoTaken: false,
    })
  },
  error(e) {
  console.log(e.detail)
  },

  uploadPhoto(path) {
    wx.showLoading({
      title: '上传中...',
    }) 
    wx.uploadFile({
      url: 'http://127.0.0.1:8001/upload',
      filePath: path,
      name: "file", //name should be the file key in formData,
      header: {"Content-Type": "application/json"},
      method: 'POST',
      success: res => {
        var data = JSON.parse(res.data)
        this.setData({
          src: data.draw_url,
          photoTaken:true,
        });
      },
      fail: err => {
        console.log(err);
        wx.hideLoading();
        wx.showToast({
          title: '请求超时',
          icon: 'loading',
          duration: 2000
        });
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
})
