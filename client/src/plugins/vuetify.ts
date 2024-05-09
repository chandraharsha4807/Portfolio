import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";// Ensure you are using css-loader
import { icons } from "../assets/icons/icons";


const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
    },
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      custom: icons,
    },
  },
});

export default vuetify;
