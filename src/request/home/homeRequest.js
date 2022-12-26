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
