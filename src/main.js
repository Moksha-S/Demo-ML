import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.directive("demo", {
  // isFn: true, // important!
  bind: function (el, vnode) {
    let dialog = false;
    function onClick() {
      console.log("hello console");
    }
    // let strng = "<button " + `@click = ${dialog}= !${dialog}}` + " > click me </button>";
    let strng = `<button  on:click="${onClick()}"> @Click  </button>`;
    let pc = `<div v-if= ${dialog}> hello </div>`;
    el.innerHTML =
      "Name: " +
      el.innerText +
      strng +
      "vnode keys: " +
      pc +
      Object.keys(vnode).join(", ");
  },
});

Vue.directive("hoverCar", {
  bind(el, binding) {
    console.log("bind", el, binding);
    // el.style.color = binding.value;
    el.addEventListener("mouseover", function (evt) {
      el.style.color = "blue";
      console.log(evt);
      let targetEl = evt.target;
      targetEl.setAttribute("title", evt.target.textContent);
    });
    el.addEventListener("mouseout", function () {
      el.style.color = "black";
      // el.innerHTML = el.innerText;
    });
  },
  inserted() {},
  updated() {},
  componentUpdated() {},
});

new Vue({
  i18n,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
