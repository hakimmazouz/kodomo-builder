import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChair,
	faArrowsAlt,
	faHandPaper,
	faImage
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChair);
library.add(faArrowsAlt);
library.add(faHandPaper);
library.add(faImage);

Vue.component("fa-icon", FontAwesomeIcon);

import "./assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
