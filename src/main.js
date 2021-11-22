import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebase.js";
// 以後、このプラグインはVueSwalという名前で使われる
import VueSwal from "vue-swal";
// Vue.useでインポートしたプラグインを使える状態にする
Vue.use(VueSwal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
