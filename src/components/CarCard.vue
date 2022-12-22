<template>
  <div class="card">
    <div class="car-title">
      <v-hover v-slot="{ hover }">
        <div class="car-title">
          <h3>{{ $t("carName") }}</h3>
          <v-btn v-if="hover" icon @click="dialog = !dialog">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="text-h5">
                Edit {{ $t("carName") }}
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="editedData"
                  label="Enter new string"
                  :placeholder="`${$t('carName')}`"
                  outlined
                ></v-text-field
              ></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="dialog = false"> cancle </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="saveEditedData('carName', `${editedData}`)"
                >
                  save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-hover>
      <h3>{{ car }}</h3>
    </div>
    <img :src="img" />

    <div class="card__footer">
      <!-- <div class="card__meta">      </div> -->
      <p class="price">Price: {{ price }}</p>
      <p class="price">Car model: {{ car_model }}</p>
      <p class="price">Car color: {{ car_color }}</p>
    </div>
    <div>
      <v-btn
        class="ma-2"
        outlined
        color="#008080"
        @click="gotoViewDetails()"
      >
        View Detials
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
  data() {
    return {
      dialog: false,
      editedData: "",
      localeMessage: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/${this.$i18n.locale}`)
      .then((response) => {
        this.localeMessage = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    gotoViewDetails() {
      window.open("https://www.cars24.com/", "_blank");
    },
    saveEditedData(key, editedData) {
      this.dialog = false;
      const value = {};
      value[key] = editedData;
      this.localeMessage = Object.assign(this.localeMessage, value);
      this.editedData = "";
      axios
        .post(`http://localhost:3000/${this.$i18n.locale}`, this.localeMessage)
        .then((response) => {
          this.$i18n.setLocaleMessage(this.$i18n.locale, response.data);
          const data = JSON.stringify(response.data);
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
.card {
  width: 30%;
  margin-bottom: 2rem;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
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

.price {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.likes {
  text-align: end;
  margin-top: 0.5rem;
}
</style>
