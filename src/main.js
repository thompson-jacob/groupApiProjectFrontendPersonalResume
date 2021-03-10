import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Configures axios library for signup
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://whispering-sands-76473.herokuapp.com"
    : "http://localhost:3000";

// This adds the jwt token for authorization
var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

createApp(App)
  .use(router)
  .mount("#app");
