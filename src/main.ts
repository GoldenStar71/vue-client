import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "./assets/styles.css";
import './index.css';

Vue.config.productionTip = false;
Vue.use(VueToast);

new Vue({
  router,
  store,
  
  render: (h) => h(App),
}).$mount("#app");
