
import Vue from '../vuecli/src.axios练习/node_modules/vue'

import App from './App.vue'

Vue.config.productionTip=false

// Vue.prototype.$glober=new Vue()

// new Vue({
//     render:h=>h(App)
// }).$mount('#root')

new Vue({
    beforeCreate(){
        Vue.prototype.$glober=this
    },
    render:h=>h(App)
}).$mount('#root')

