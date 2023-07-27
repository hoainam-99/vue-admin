import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "./store"

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Antd);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
