import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faShieldAlt,
  faQuoteLeft,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faChevronRight,
  faBars,
  faSquare,
  faCalendar,
  faCircle,
  faPencilAlt,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faPhone,
  faEnvelope,
  faUser,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faTelegramPlane,
  faFacebookF,
  faPinterestP,
  faApple
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt, faClock } from "@fortawesome/free-regular-svg-icons"; //far

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircle,
  faPencilAlt,
  faBars,
  faCalendar,
  faSquare,
  faQuoteLeft,
  faChevronRight,
  faLaptop,
  faCoffee,
  faShieldAlt,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faPhone,
  faEnvelope,
  faUser,
  faStar,
  faStarHalfAlt
); //fas

library.add(faCommentAlt, faClock); //far

library.add(
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faTelegramPlane,
  faFacebookF,
  faPinterestP,
  faApple
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.filter("imgUrl", function(poster_path) {
  if (!poster_path) return "";
  return "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + poster_path;
});

Vue.directive("list", {
  bind(el, binding) {
    if (binding.value == "wide") {
      el.style.color = "red";
      el.style.fontSize = "20px";
    }
    if (binding == "narrow") {
      el.style.color = "green";
    }
  }
});

Vue.directive("format", {
  bind(el) {
    el.style.color = "blue";
    el.style.fontSize = "20px";
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
