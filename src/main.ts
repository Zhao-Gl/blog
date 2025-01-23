import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import "./assets/css/reset.css";
import "./mock/mockServer.js";

import { Modal, message } from "ant-design-vue";
import "ant-design-vue/es/message/style/css";
import "ant-design-vue/es/modal/style/css";

import { router } from "./router/index";

app.config.globalProperties.$Modal = Modal;
app.config.globalProperties.$message = message;

import { createPinia } from "pinia";
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
