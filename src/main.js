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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
