import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import Loading from "./components/loading";
import { timeFilter } from "./filters";

import axios from "axios";

Vue.filter("timeFilter", timeFilter);
axios.interceptors.request.use(
  function(config) {
    //配置发送时的请求的信息请求显示loading
    store.dispatch("showLoading");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function(config) {
    //配置请求回来的信息，回来loading消失
    store.dispatch("hideLoading");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.prototype.$http = axios; //其他页面在使用axios时直接使用this.$http

Vue.use(Loading);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
