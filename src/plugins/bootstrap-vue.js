import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import container from 'bootstrap-vue/es/components/layout/container';
import col from 'bootstrap-vue/es/components/layout/col'
import row from 'bootstrap-vue/es/components/layout/row'
import button from 'bootstrap-vue/es/components/button/button'
import card from 'bootstrap-vue/es/components/card/card'
Vue.use(BootstrapVue)
Vue.component('b-container', container);
Vue.component('b-col', col);
Vue.component('b-row', row);
Vue.component('b-button', button);
Vue.component('b-card', card);
