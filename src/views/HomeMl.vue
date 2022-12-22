<template>
  <div class="home">
    <h1 class="main-title">
      <onHover fieldName="title"></onHover>
    </h1>
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
import onHover from "@/components/onHover.vue";
// import CarData from "@/components/CarData.vue";

export default {
  name: "HomeView",
  components: {
    // CarData,
    CarCards,
    onHover,
  },
  data() {
    return {
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

  methods: {},
};
</script>

<style scoped>
.field {
  margin: 20px;
}
.main-title {
  display: flex;
  justify-content: center;
}
</style>
