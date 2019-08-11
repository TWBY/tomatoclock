import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home // import Home from './views/Home.vue'
  },
  {
    path: '/edit',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue'),
    children: [{
      path: 'List',
      name: 'List',
      component: () => import('./views/TodoListFull.vue')
    }, {
      path: 'Chart',
      name: 'Chart',
      component: () => import('./views/Chart.vue')
    }, {
      path: 'Music',
      name: 'Music',
      component: () => import('./views/Music.vue')
    }]
  }
  ]
});
