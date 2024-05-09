import { createApp } from "vue";

import vuetifyPlugin from "./plugins/vuetify"
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(vuetifyPlugin);

// Mount the app to the DOM
app.mount("#app");
