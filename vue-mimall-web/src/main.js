import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/http'
import VueLazyLoad from 'vue-lazyload'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import './assets/iconfont/iconfont.css'

Vue.prototype.$http = http
Vue.use(VueLazyLoad,{
  loading:'./assets/imgs/_loading.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
