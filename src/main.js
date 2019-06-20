import Vue from 'vue'
import router from './router/'
import store from './store/'
// 导入全局Vue组件
import CuCustom from './colorui/components/cu-custom'
import App from './App'
// 导入css
import './colorui/animation.css'
import './colorui/icon.css'
import './colorui/main.css'
import './common/stylus/common.styl'

import axiosInit from './common/js/axios-config'

Vue.component('cu-custom', CuCustom)
Vue.config.productionTip = false
// 初始化状态栏
Vue.prototype.StatusBar = 20;
const rect = {
  width: 87,
  height: 32,
  left: 278,
  top: 26,
  right: 365,
  bottom: 58
};
Vue.prototype.Custom = rect;
Vue.prototype.CustomBar = rect.bottom + rect.top - Vue.prototype.StatusBar;

axiosInit()

// 创建根Vue对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
