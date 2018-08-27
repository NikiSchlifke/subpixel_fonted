import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// https://dzone.com/articles/use-any-javascript-library-with-vuejs
import chroma from 'chroma-js'


Object.defineProperty(Vue.prototype, '$chroma', { value: chroma });

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
