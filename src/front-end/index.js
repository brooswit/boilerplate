import 'es6-promise/auto'

import './css/main.css';
import Vue from 'vue';
import Vuex from 'vuex'
import Main from './vues/main.vue';
import makeStore from './src/makeStore';

Vue.use(Vuex);

// const webSocket = new ws("")
const channel = new WebSocketChannel(ws)
const store = makeStore(channel)

new Vue(Main).$mount({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store
});
