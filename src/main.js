import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

window.$ = window.jQuery = require("jquery/dist/jquery");

createApp(App).use(router).mount("#app");
