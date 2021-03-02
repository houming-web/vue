import Vue from 'vue'
import { Button,MessageBox , Message} from 'element-ui'

Vue.use(Button)
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
