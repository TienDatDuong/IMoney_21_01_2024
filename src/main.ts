import { createApp } from "vue";
import "./style/tailwind.css";
import "./style.css";
import App from "./App.vue";
import router from './router'
import store from "./store";
import { registerComponentGlobal } from "./utils/import";


const app = createApp(App)

registerComponentGlobal(app)

app.use(router)
app.use(store)

app.mount("#app");
