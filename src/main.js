import './firebase'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import './registerServiceWorker'

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
