import api from "./api";
import { request } from "../request";

export function getMultidata(params) {
  return request({
    url: api.getMultidata,
    method: "get",
  });
}

export function getGoodsList(params) {
  return request({
    url: api.getGoodsList,
    params: params,
    method: "get",
  });
}
