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
  // 计算选中商品的总价格
  totalCount({ state, commit }, params) {
    if (state.cartList[params].isChecked) {
      commit("TOTAL_INCREASE", params);
      commit("TOTAL_COUNT_INCREASE");
    } else {
      commit("TOTAL_DECREASE", params);
      commit("TOTAL_COUNT_DECREASE");
    }
  },
  // 全选按钮选中，计算总价格和总数
  totalCheckedClick({ state, commit }, params) {
    let totalCount = 0;
    let totalPrice = 0;
    if (params) {
      // 1.遍历全部商品，把所有商品都变为选中状态
      if (state.cartList.length) {
        console.log(state.cartList);
        for (let item of state.cartList) {
          if (!item.isChecked) {
            commit("CHANGE_CHECKED", item);
            totalCount++;
            totalPrice += (item.price * 1) * item.count;
          }
        }
        commit("ALL_CHECKED_TOTALCOUNT", totalCount);
        commit("ALL_CHECKED_TOTALPRICE", totalPrice);
      }
    } else {
      for (let item of state.cartList) {
        if (item.isChecked) {
          commit("CHANGE_CHECKED", item);
        }
      }
      commit("ALL_CHECKED_CONCEL");
    }
  },
};
