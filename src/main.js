import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import lazyload from "vue-lazyload"

createApp(App).use(store).use(router).use(lazyload,{
  loading: require("./assets/images/common/placeholder.png")
}).mount('#app')
