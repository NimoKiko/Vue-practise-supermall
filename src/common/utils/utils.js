const utils = {
  /**
   * 防抖函数:
   *  -防抖:比如说，在一个搜索框中输入一些内容会向服务器请求数据来获取数据展示到下拉列表中，
   *        但是如果用户输入的速度太快，组件却仍然对每一次输入都去请求数据，就会出现抖动。
   *        防抖主要是应对类似这种情况。等一小会儿时间，再统一请求数据。
   */
  debounce(fun, delay = 500) {
    // 创建定时器
    let timer = null;
    // 返回定时器包裹的函数（这个函数执行的内容由fun参数传过来）
    return function (...args) {
      // 如果定时器存在，清除定时器
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        // 通过apply调用fun函数，使用args接收参数
        fun.apply(this, args);
      }, delay);
    };
  },
  /**
   * 时间格式化
   */
  formatDate(date, fmt) {
    //1.获取年份
    //y+ 1个或者多个y
    //y* 0个或者多个y
    //y? 0个或者1个y
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    //2.
    let o = {
      "M+": date.getMonth() + 1,

      "d+": date.getDate(),

      "h+": date.getHours(),

      "m+": date.getMinutes(),

      "s+": date.getSeconds(),
    };

    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";

        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        );
      }
    }

    return fmt;
  },

};
function padLeftZero(str) {
  //保证时间的位数，不够左侧加0
  return ("00" + str).substr(str.length);
};
export default utils;
