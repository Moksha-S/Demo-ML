<template>
  <div class="nav" :class="selectedTheme">
    <div class="nav__start">
      <router-link to="/">{{ $t("nav-home") }}</router-link> |
      <router-link to="/about">{{ $t("nav-about") }}</router-link>
    </div>

    <div class="nav__end">
      <!-- <div style="padding: 0 10px">
        <v-btn v-if="selectedTheme == 'teal'" @click="changetheme('red')">
          red
        </v-btn>
        <v-btn v-if="selectedTheme == 'red'" @click="changetheme('teal')">
          teal
        </v-btn>
      </div> -->
      <div class="user-greeting">
        {{ $t("user_greeting", { name: "Sam" }) }}
      </div>
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  components: {
    LocaleSwitcher,
  },

  data() {
    return {
      selectedTheme: "teal",
    };
  },
  methods: {
    changetheme(arg) {
      localStorage.setItem("theme", arg);
      this.selectedTheme = arg;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/main.css";

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #fff;
  /* background-color: var(--teal); */

  /* background-color: #008080; */
}

.nav__start {
  display: flex;
  align-items: normal;
}

.nav__end {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav img {
  margin-right: 1rem;
}

.nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
.user-greeting {
  margin-right: 1rem;
}
</style>
<style>
[dir="rtl"] .user-greeting {
  margin-right: 0;
  margin-left: 1rem;
}
</style>
