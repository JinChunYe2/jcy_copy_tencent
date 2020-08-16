import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 全局引入jquery
import $ from "jquery";
// 测试版公共组件
import HelloWorld from "../src/components/HelloWorld.vue";

createApp(App)
  .use(store)
  .use(router)
  // 全局引入公共组件
  .component('HelloWorld', HelloWorld)
  .use($).mount("#app");