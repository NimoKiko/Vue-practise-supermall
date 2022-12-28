import api from "./api";
import { request } from "../request";
// 获取首页多条数据
export function getMultidata(params) {
  return request({
    url: api.getMultidata,
    method: "get",
  });
}
// 获取首页商品列表
export function getGoodsList(params) {
  return request({
    url: api.getGoodsList,
    params: params,
    method: "get",
  });
}
// 根据ID获取商品详细信息
export function getGoodsDetailById(params) {
  // debugger
  return request({
    url: api.getGoodsDetailById,
    params: params,
  })
};
// 导出商品类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

// 导出商家信息类
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

// 导出商品参数类
export class Params {
  constructor(info, rule){
    this.info = info.set;
    this.size = rule.tables;
    this.image = info.images ? info.images[0] : "";
  }
}
