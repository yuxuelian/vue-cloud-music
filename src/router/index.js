import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      alias:'/',
      // 有 children 的时候 不能定义 name 属性
      // name: 'home',
      component: () => import('../pages/home/root-component'),
      children: [
        {
          path: '/',
          redirect: '/home-discover'
        },
        {
          path: '/home-discover',
          name: 'home-discover',
          component: () => import('../pages/home/sub/discover-component'),
        },
        {
          path: '/home-mine',
          name: 'home-mine',
          component: () => import('../pages/home/sub/mine-component'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/root-component')
    },
    {
      path: '/broad-station',
      name: 'broad-station',
      component: () => import('../pages/broad-station/root-component')
    },
    {
      path: '/day-recommend',
      name: 'day-recommend',
      component: () => import('../pages/day-recommend/root-component')
    },
    {
      path: '/rank-list',
      name: 'rank-list',
      component: () => import('../pages/rank-list/root-component')
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: () => import('../pages/song-list/root-component')
    },
    {
      path: '/song-list-detail',
      name: 'song-list-detail',
      component: () => import('../pages/song-list-detail/root-component')
    },
  ]
})
