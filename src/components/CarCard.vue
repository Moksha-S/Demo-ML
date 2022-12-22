<template>
  <div class="card">
    <div class="car-title">
      <onHover fieldName="carName"></onHover>
      <h3>{{ car }}</h3>
    </div>
    <div>
      <img :src="img" />
    </div>

    <div class="card__footer">
      <div class="car-title">
        <onHover fieldName="carPrice"></onHover>
        <P class="car-card-text"> {{ price }}</P>
      </div>
      <div class="car-title">
        <onHover fieldName="carModel"></onHover>
        <P class="car-card-text"> {{ car_model }}</P>
      </div>
      <div class="car-title">
        <onHover fieldName="carColor"></onHover>
        <P class="car-card-text"> {{ car_color }}</P>
      </div>
    </div>
    <div>
      <v-btn class="ma-2" outlined color="#008080" @click="gotoViewDetails()">
        {{ $t("viewDetails") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import onHover from "./onHover";

export default {
  props: {
    id: Number,
    car: String,
    car_model: String,
    car_color: String,
    car_model_year: Number,
    car_vin: String,
    price: String,
    availability: Boolean,
    img: String,
  },
  components: { onHover },

  data() {
    return {};
  },
  created() {
    // axios.get(`http://localhost:3000/${this.$i18n.locale}`).then(() => {});
  },
  methods: {
    gotoViewDetails() {
      window.open("https://www.cars24.com/", "_blank");
    },
  },
};
</script>

<style scoped>
.card {
  width: 30%;
  margin-bottom: 2rem;
  border: 1px solid #008080;
  border-radius: 4px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  margin: 0;
  padding: 0.5em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  width: 100%;
}

.card__footer {
  text-align: center;
  margin: 0;
  padding: 0.5em;
}

.car-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

p {
  margin: 0;
  font-size: 14px;
}

.car-card-text {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.likes {
  text-align: end;
  margin-top: 0.5rem;
}
</style>
