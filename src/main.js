// vue 入口文件

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import lazy from 'vue-lazy-image'
import App from './App'
import store from './store'
import router from './router/index'
import * as filters from './filters'

// require('offline-plugin/runtime').install();
// 图片懒加载
Vue.use(lazy)
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.debug = true

const app = new Vue({
  el:'#app',
  name: 'zhihu',
  router,
  store,
  render(h) {
    return h(App)
  }
})

export { app, router, store }