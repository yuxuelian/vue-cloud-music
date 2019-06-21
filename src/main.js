import Vue from 'vue'

// 导入css
import './colorui/animation.css'
import './colorui/icon.css'
import './colorui/main.css'
import './common/stylus/common.styl'

Vue.config.productionTip = false

// 初始化swiper
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
