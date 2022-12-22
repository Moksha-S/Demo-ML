<template>
  <div class="home">
    <h1>{{ $t("title") }}</h1>
    <h2>{{ $t("welcomeString") }}</h2>
    <div style="margin: 4% 10%">
      <CarCards />
    </div>
    <!-- <CarData /> -->
  </div>
</template>

<script>
import axios from "axios";
import CarCards from "@/components/CarCards.vue";
// import CarData from "@/components/CarData.vue";

export default {
  name: "HomeView",
  components: {
    // CarData,
    CarCards,
  },
  data() {
    return {
      text: "",
      carName: "",
      carModel: "",
      active: false,
      localeMessage: {},
    };
  },

  created() {
    axios
      .get(`http://localhost:3000/en`)
      .then((response) => {
        this.localeMessage = response.data;
        // console.log(this.localeMessage, "879465");
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    
    mouseOver: function () {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.field {
  margin: 20px;
}
</style>
