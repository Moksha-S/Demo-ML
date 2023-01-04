<template>
  <div class="home">
    <h1 class="main-title">
      <textHover fieldName="title"></textHover>
    </h1>

    <h2
      v-hoverCar="'demo'"
      @mouseover="onTextHover($event, 'welcomeString')"
      @mouseleave="onTextleave()"
    >
      {{ $t("welcomeString") }}
      <v-btn
        icon
        v-if="onHover && editFieldName == 'welcomeString'"
        @click="onBtnClick()"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </h2>

    <div style="margin: 4% 10%">
      <CarCards />
    </div>

    <div v-if="showModal">
      <EditBox
        :editShow="showModal"
        :fieldName="editFieldName"
        @update="changeShowModal()"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CarCards from "@/components/CarCards.vue";
import textHover from "@/components/textHover.vue";
import EditBox from "@/components/EditBox.vue";

export default {
  name: "HomeView",
  components: {
    CarCards,
    textHover,
    EditBox,
  },
  data() {
    return {
      onHover: false,
      showModal: false,
      editFieldName: "",
    };
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

  methods: {
    changeShowModal() {
      this.showModal = !this.showModal;
    },

    onBtnClick() {
      this.showModal = !this.showModal;
    },

    onTextHover(evt, str) {
      // console.log(evt.target.innerHTML);
      this.editFieldName = str;
      this.onHover = true;
      // setTimeout(() => {
        // this.showModal = !this.showModal;
      // }, 2000);
    },
    
    onTextleave() {
      this.onHover = false;
    },
  },
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
.demo-btn {
  position: absolute;
  top: 5em;
  left: 63%;
}
</style>
