// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppHeader from './components/SharedComponents/Header'
import router from './router'

Vue.config.productionTip = false

Vue.component('AppHeader', AppHeader)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App, AppHeader },
  template: '<App/>'
})
