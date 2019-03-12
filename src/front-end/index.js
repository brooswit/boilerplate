import 'es6-promise/auto'

import './css/main.css';
import Vue from 'vue';
import Vuex from 'vuex'
import Main from './vues/main.vue';
import store from './src/store';

Vue.use(Vuex);

new Vue(Main).$mount({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
});
