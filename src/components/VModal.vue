<template>
  <div class="modal fade" :class="{ show: show }" role="dialog">
    <slot></slot>
  </div>

  <!-- 
  <div ref="modal-1">
      <div v-if="show">demo show on if</div>
    </div> -->
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> -->
  <!-- <div class="container" id="modal-app" v-cloak>
      <button
        type="button"
        class="btn btn-info btn-lg"
        v-modal-open="'modal-1'"
      >
        Open Modal
      </button>
      <VModal ref="modal-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" v-modal-close="'modal-1'">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                v-modal-close="'modal-1'"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </VModal>
    </div> -->
</template>

<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> -->

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  directives: {
    "modal-open": {
      bind(el, binding, vnode) {
        el.addEventListener("click", () => {
          vnode.context.$refs[binding.value].show = true;
          document.body.style.overflowY = "hidden";
        });
      },
    },
    "modal-close": {
      bind(el, binding, vnode) {
        el.addEventListener("click", () => {
          vnode.context.$refs[binding.value].show = false;
          document.body.style.overflowY = "auto";
        });
      },
    },
  },
};
</script>

<style>
/* ++++++++++++++ */
[v-cloak] {
  display: none;
}

.modal {
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
}

.modal .modal-dialog {
  margin-top: 60px;
}

/* .show {
  display: block;
} */
</style>
