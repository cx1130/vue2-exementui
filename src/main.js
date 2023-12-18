import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Loading from "./components/Loading.vue";

axios.defaults.baseURL = "/api";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("Loading", Loading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
