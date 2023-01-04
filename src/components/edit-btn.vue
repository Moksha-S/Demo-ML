<template>
  <div>
    <v-btn
      icon
      v-if="hoverShow & (editFieldName == 'message')"
      @click="editShow = !editShow"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    hoverShow: Boolean,
    editFieldName: String,
    // editShow: Boolean,
  },
  data() {
    return {
      dialogValue: false,
      editedData: "",
      localeMessage: {},
    };
  },
  created() {},
  mounted() {
    this.dialogValue = this.editShow;
  },
  methods: {},
};
</script>
