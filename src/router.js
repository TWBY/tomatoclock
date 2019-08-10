import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import list from './views/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    // component: Home // import Home from './views/Home.vue'
    component: list
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    component: list
  }
  ]
})
