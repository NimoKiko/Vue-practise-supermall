import {
  getMultidata,
  getGoodsList,
  getGoodsDetailById,
} from "@/request/home/homeRequest";
export default {
  // 获取轮播图数据和首页推荐数据
  getMultidata({ commit }, params) {
    let p = getMultidata();
    return p;
  },
  // 获取商品列表数据
  getGoodsList({ commit }, params) {
    let p = getGoodsList(params);
    return p;
  },
  // 根据ID获取商品详细信息
  getGoodsDetailById({ commit }, params) {
    let p = getGoodsDetailById(params);
    return p;
  },
  // 加入购物车
  saveCart({ state, commit }, params) {
    // 方法二：
    let product = state.cartList.find((item) => {
      return item.iid === params.iid;
    });
    if (product) {
      commit("PRODUTC_COUNT_PLUS", product);
    } else {
      params.count = 1;
      commit("SAVE_PRODUCT", params);
    }
  },
};
