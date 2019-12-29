import Vue from 'vue'
import App from './App.vue'

import axios from '../node_modules/axios/dist/axios.min.js'

import 'bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css' // eslint-disable-line no-unused-vars
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
