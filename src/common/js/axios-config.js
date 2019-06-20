import Vue from 'vue'
import axios from 'axios'
// 缓存过期时间
const CACHE_TIMEOUT = 2 * 60 * 1000
export default function () {
  axios.defaults.timeout = 20000
  axios.defaults.baseURL = 'http://118.126.108.24:3000/'
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  // 请求拦截器
  axios.interceptors.request.use((request) => {
    return request
  }, function (error) {
    return Promise.reject(error)
  })
  // 添加响应拦截器
  axios.interceptors.response.use((response) => {
    // 响应成功
    return response
  }, function (error) {
    // 响应失败
    return Promise.reject(error)
  })
  Vue.prototype.$axios = axios
}
