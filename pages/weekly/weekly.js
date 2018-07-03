Page({
  data: {
    weeklyMovieList: [{
        name: "侏罗纪世界1",
        comment: "hhh",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true
      },
      {
        name: "侏罗纪世界2",
        comment: "mmm",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true
      },
      {
        name: "侏罗纪世界3",
        comment: "lll",
        imagePath: "/images/zljsj.jpg",
        isHighlyRecommended: true
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
  f0: function() {
    this.setData({
      count: this.data.count + 1,
      "weeklyMovieList[2].name" :"改名字"
    })
  }
})