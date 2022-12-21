<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>{{ $t("title") }}</h1>
    <br />
    <!-- <p>{{ $t('greetings', [`${temp}`]) }}</p> -->
    <button @click="chekLang()">check Lang</button>

    <div @mouseover="mouseOver" style="margin: 10px">
      ===== {{ $t("title") }}=====
    </div>
    <div v-show="active">
      <label for="fname">edit:</label>
      <input v-model="text" :placeholder="`${$t('title')}`" />
      <input
        type="submit"
        value="Submit"
        @click="check({ title: `${text}` })"
      />
    </div>
    <div>
      <div class="field">
        <label for="fname">Car name:</label>
        <input v-model="carName" placeholder="car name" />
      </div>
      <div>
        <label for="fname">Car model:</label>
        <input v-model="carModel" placeholder="car model" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
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
        // JSON responses are automatically parsed.
        this.localeMessage = response.data;
        console.log(this.localeMessage, "879465");
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    mouseOver: function () {
      this.active = !this.active;
    },

    chekLang() {
      console.log("===============", this.$i18n.messages[this.$i18n.locale]);
    },

    check(value) {
      this.active = !this.active;
      this.localeMessage = Object.assign(this.localeMessage, value);
      this.text = "";
      axios
        .post(`http://localhost:3000/${this.$i18n.locale}`, this.localeMessage)
        .then((response) => {
          const data = JSON.stringify(response.data);
          this.$i18n.setLocaleMessage(this.$i18n.locale, response.data);
          window.localStorage.setItem(this.$i18n.locale, data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>
.field {
  margin: 20px;
}
</style>
