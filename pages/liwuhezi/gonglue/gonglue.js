Page({
  data:{
    current:0,
    list:[],
    list1:[],
    list2:[],
    list3:[],
    list4:[],
    swiper:{
      autoplay:false,
      indicator:false,
      durayion:300,
      interval: 0
    }
  },
  onLoad:function(options){
    var that=this;
    wx.request({
      url:'http://localhost:90/mock/gonglue1.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
      console.log(typeof res.data);
          that.setData({
            list: res.data
            // loadingHidden:true
          });
        console.log(that.data.list.length);

      },
      fali:function(error){
        console.log(error);
      }
    });
    wx.request({
      url:'http://localhost:90/mock/gonglue2.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
      console.log(typeof res.data);
          that.setData({
            list1: res.data
            // loadingHidden:true
          });
        console.log(that.data.list.length);

      },
      fali:function(error){
        console.log(error);
      }
    });
    wx.request({
      url:'http://localhost:90/mock/gonglue3.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
      console.log(typeof res.data);
          that.setData({
            list2: res.data
            // loadingHidden:true
          });
        console.log(that.data.list.length);

      },
      fali:function(error){
        console.log(error);
      }
    });
    wx.request({
      url:'http://localhost:90/mock/gonglue4.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
      console.log(typeof res.data);
          that.setData({
            list3: res.data
            // loadingHidden:true
          });
        console.log(that.data.list.length);

      },
      fali:function(error){
        console.log(error);
      }
    });
    wx.request({
      url:'http://localhost:90/mock/gonglue5.json',
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
      console.log(typeof res.data);
          that.setData({
            list4: res.data
            // loadingHidden:true
          });
        console.log(that.data.list.length);

      },
      fali:function(error){
        console.log(error);
      }
    });
  },
  switchSlider:function(event){
    this.setData({
      current:event.target.dataset.index
    })
  },
  changeSlider: function(event){
    this.setData({
      current:event.detail.current
    })
  }
})
