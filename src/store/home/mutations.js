export default {
  // (没有重复商品)保存进购物车
  SAVE_PRODUCT(state, res) {
    state.cartList.push(res);
  },
  // (有重复商品)数量加一
  PRODUTC_COUNT_PLUS(state, res) {
    res.count++;
  },
};
