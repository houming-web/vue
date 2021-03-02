

import Vue from '../vuecli/src.axios练习/node_modules/vue'

import App from './App.vue'

Vue.config.productionTip=false


new Vue({
    beforeCreate(){
        Vue.prototype.$bus=this
    },
    render:h=>h(App)
}).$mount('#app')