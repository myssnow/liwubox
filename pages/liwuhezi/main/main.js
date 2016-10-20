Page({
  data:{
    list:[],
    lis:[],
    loadingHidden:true,
    refreshHidden:true,
    loadmoreHidden:true,
  },

  onLoad:function(){
    var that=this;
    wx.request({
      url:'http://localhost:90/mock/list.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
        console.log(res);
        setTimeout(function(){
          that.setData({
            list: res.data,
            lis:res.data.guanxi
            // loadingHidden:true
          });

        },1500);
      },
      fali:function(error){
        console.log(error);
      }
    });
  },
  actionToupper:function(){
    var that=this;
    this.setData({
      refreshHidden:false
    });
    wx.request({
      url: 'http://localhost:90/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },
  actionTolower:function(){
    var that = this;
  this.setData({
    loadmoreHidden: false
  });
  wx.request({
    url: 'http://localhost:90/mock/more.json',
    success: function (res) {
      setTimeout(function () {
        that.setData({
          list: that.data.list.concat(res.data),
          loadmoreHidden: true
        });
      }, 1500);
    }
  });
  }
})
