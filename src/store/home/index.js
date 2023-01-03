import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
export default {
  state:{
    cartList:[],
    totalCost:0,
    totalChecked:0
  },
  actions:actions,
  mutations:mutations,
  getters:getters
}