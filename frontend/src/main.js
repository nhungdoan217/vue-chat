import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
