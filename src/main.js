import Vue from 'vue'
import Vuex from 'vuex' // paso 1 importar vuex
import App from './App.vue'

Vue.config.productionTip = false

//llamamos a vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:0
  },
  //
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
