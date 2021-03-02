import Vue from 'vue'
import {
  
    Input,
   
    Radio,
    RadioGroup,
   
    Checkbox,
 
    CheckboxGroup,
    Switch,
    Select,
    Option,
    Button,
    Form,
    FormItem,
    Row,
    Col,
    TimePicker,
    DatePicker,
    Message,
    MessageBox
    
  } from 'element-ui';


Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(TimePicker)
Vue.use(DatePicker)


//   Vue.prototype.$loading = Loading.service;
//   Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//   Vue.prototype.$confirm = MessageBox.confirm;
//   Vue.prototype.$prompt = MessageBox.prompt;
//   Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
