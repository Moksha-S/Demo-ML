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
    return {};
  },

  created() {
    axios
      .get(`http://localhost:3000/${this.$i18n.locale}`)
      .then((response) => {
        console.log("current locale string", response.data);
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
