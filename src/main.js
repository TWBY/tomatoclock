import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// render: function (createElement) {
//   return createElement(App);
// }

// render (createElement) {
//   return createElement(App);
// }

// render (h){
//   return h(App);
// }

// render: h => h(App);
