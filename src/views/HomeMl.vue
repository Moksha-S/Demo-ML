<template>
  <div class="home">
    <h1 class="main-title">
      <textHover fieldName="title"></textHover>
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
import textHover from "@/components/textHover.vue";
// import CarData from "@/components/CarData.vue";

export default {
  name: "HomeView",
  components: {
    // CarData,
    CarCards,
    textHover,
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
