Page({
  data: {
    weeklyMovieList: [{
        name: "侏罗纪世界1",
        comment: "hhh",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true,
        id:66
      },
      {
        name: "侏罗纪世界2",
        comment: "mmm",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true,
        id: 26416062
      },
      {
        name: "侏罗纪世界3",
        comment: "lll",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true,
        id: 88
      }
    ],
    count: 123,
    score: 95
  },
  onLoad: function() {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1 //如果data中没有currentIndex，那就创建一个并赋值
    })
  },
  returnThisWeek: function() {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  pageTurning:function(evevt){
    var movieId = evevt.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  },
  onShareAppMessage:function(){
    return{
      title:'每周推荐'
    }
  }
})