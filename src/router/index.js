import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/root-component.vue')
    },
    {
      path: '/broad-station',
      name: 'broad-station',
      component: () => import('../pages/broad-station/root-component.vue')
    },
    {
      path: '/day-recommend',
      name: 'day-recommend',
      component: () => import('../pages/day-recommend/root-component.vue')
    },
    {
      path: '/rank-list',
      name: 'rank-list',
      component: () => import('../pages/rank-list/root-component.vue')
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: () => import('../pages/song-list/root-component.vue')
    },
    {
      path: '/song-list-detail',
      name: 'song-list-detail',
      component: () => import('../pages/song-list-detail/root-component.vue')
    },
  ]
})
