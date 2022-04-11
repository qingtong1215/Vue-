import Vue from 'vue'
import App from './App.vue'
import {FormItem,Form, Select, Option, Button, Radio, Input,
Container, Main, Header, Aside, Menu,MenuItem, Submenu, MenuItemGroup,Row,Col,Card, Table,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
