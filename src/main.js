// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

import api from './utils/api.js'
import utils from './utils/utils.js'
import './utils/filters'
//components
import toast from './components/toast/index.js'
import modal from './components/modal/index.js'
Vue.config.productionTip = false
Vue.use(api);
Vue.use(utils);
Vue.use(toast);
Vue.use(modal);
/* eslint-disable no-new */
window.vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
