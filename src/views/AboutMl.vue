<template>
  <div>
    <div class="about">
      <h1>{{ $t("about-title") }}</h1>

      <p>{{ $t("about-para1") }}</p>

      <p>{{ $t("about-para2") }}</p>

      <p>{{ $t("about-para3") }}</p>
    </div>

    <!-- <div>
      <h1 v-mhover="'car'">Hello</h1>
    </div>
    <div ref="car">
      <div v-if="viewCar"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      viewCar: false,
    };
  },
  methods: {
    call: function () {
      console.log("called");
    },
  },
  directives: {
    mhover: {
      bind(el, binding, vnode) {
        console.log(el);
        // var newbutton = `<button ${onclick}="alert('hi')">Click me</button>`; //creates string from data
        // var element = document.getElementById("mydiv");
        el.addEventListener("click", () => {
          vnode.context.$refs[binding.value].viewCar = true;
          console.log("895623", vnode.context.$refs[binding.value]);
          // el.insertAdjacentHTML("afterbegin", newbutton);
        });
        console.log(el.children);
        // el.children[0].onclick = this.call();
        // el.focus()
        // addEventListener('mouseout', () => {
        //   el.parentNode.removeChild(el);
        // });
      },
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
