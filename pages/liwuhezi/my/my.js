Page({
  data:{
    modalHidden:true,
    userInfo:{
      username: '',
      password: ''
    }

  },
  onShow:function(){
    var u=wx.getStorageSync('username');
    if(!u){
      this.setData({
        userInfo:{
          username: '',
          password: ''
        },
        modalHidden:false
      })
    }
  },
  actionConfirm:function(){
    wx.navigateTo({
      url:'/pages/liwuhezi/signins/signins'
    })
    this.setData({
      modalHidden:true
    })
  },
  actionCancel: function(){
    this.setData({
      modalHidden:true
    })
  },

  onLoad:function(){

  }
})
