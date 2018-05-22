// components/rater/rater.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: {  //最大评分
      type: Number,
      value: 5,
    },
    rateVal: {
      type: Number,
      value: 0,
    },
    stars: {
      type: Array,
      value: [0,1,2,3,4],
    },
    textColor: {
      type: String,
      value: `#111`,
    },
    activeColor: {  //star激活时的颜色
      type: String,
      value: `#fc6`,
    },
    text: {
      type: String, //文字说明
      value: "ceshi",
    },
    fontSize: {
      type: Number,
      value: 15,
    },
    starSize: {
      type: Number,
      value: 25,
    },
    star: {
      type: String,
      value: `★`,
    },
    margin: {
      type: Number,
      value: 2,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  // 初始化数据
  // ready: function(){
  //   stars1: []
  //   for (let i = 0; i < max; i++) {
  //     stars1.push(i)
  //   }
  //   this.setData({
  //     stars: stars1
  //   })
  //   // for (let i = 0; i < max; i++) {
  //   //    stars.push(i)
  //   // }
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerClick(e) {
      var iClick = e.currentTarget.dataset.index + 1
      if (iClick === 1 && this.properties.rateVal===1)
        iClick = 0
      console.log("iClick:"+iClick)
      this.setData({
        rateVal: iClick,
      })
      // 触发事件
      this.triggerEvent('valuechanged', { "value": iClick})
    },
  }
})
