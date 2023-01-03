export default {
  // (没有重复商品)保存进购物车
  SAVE_PRODUCT(state, res) {
    state.cartList.push(res);
  },
  // (有重复商品)数量加一
  PRODUTC_COUNT_PLUS(state, res) {
    res.count++;
  },
  // 购物车选中商品总价增加
  TOTAL_INCREASE(state, res) {
    state.totalCost += state.cartList[res].price * state.cartList[res].count;
  },
  // 购物车选中商品总价减少
  TOTAL_DECREASE(state, res) {
    state.totalCost -=  state.cartList[res].price * state.cartList[res].count;
  },
  // 选中商品总数加一
  TOTAL_COUNT_INCREASE(state, res) {
    state.totalChecked++;
  },
  // 选中商品总数减一
  TOTAL_COUNT_DECREASE(state, res) {
    state.totalChecked--;
  },
  // 改变全部商品的选中状态
  CHANGE_CHECKED(state, res) {
    res.isChecked = !res.isChecked;
  },
  // 全选按钮记录总数
  ALL_CHECKED_TOTALCOUNT(state, res) {
    state.totalChecked += res;
  },
  // 全选按钮记录总价
  ALL_CHECKED_TOTALPRICE(state, res) {
    state.totalCost += res;
  },
  // 取消全选
  ALL_CHECKED_CONCEL(state, res) {
    state.totalChecked = 0;
    state.totalCost = 0;
  }
};
