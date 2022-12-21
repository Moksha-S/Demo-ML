<template>
  <div id="app">
    <NavML />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavML from "./components/NavML.vue";

export default {
  name: "App",
  components: {
    NavML,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .container {
  padding: 1rem;
}
</style>
