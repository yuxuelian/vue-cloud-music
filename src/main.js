import Vue from 'vue'
import './common/js/cube-ui'
Vue.config.productionTip = false
// 初始化图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '',
  loading: ''
})
// 初始化swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 初始化自定义titleBar
import AppBarComponent from './common/components/app-bar-component'
Vue.component('app-bar-component', AppBarComponent)
// 初始化状态栏
Vue.prototype.StatusBarHeight = 0;
Vue.prototype.AppBarHeight = 50;
// 初始化axios
import axiosInit from './common/js/axios-config'
axiosInit()
// 创建根Vue对象
import App from './App'
import router from './router/'
import store from './store/'
import 'amfe-flexible'
// simple history management
const history = window.sessionStorage
let historyCount = history.getItem('count') * 1
router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
