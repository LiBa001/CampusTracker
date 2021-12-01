<template>
  <div class="toast" :id="timeoutId"  role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
    <div class="d-flex">
      <div class="toast-body">
        <slot></slot>
        <button type="button" class="btn btn-secondary btn-sm" @click="undoDeletion" data-bs-dismiss="toast">Undo</button>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import { Toast } from "bootstrap";

export default {
  name: 'DeletionWarning',
  props: ['timeoutId', 'url'],
  emits: ['undo'],
  methods: {
    undoDeletion() {
      clearTimeout(this.timeoutId);
      this.$emit('undo', this.url);
    }
  },
  mounted() {
    const element = document.getElementById(this.timeoutId);
    const toast = new Toast(element);
    toast.show();
  }
}
</script>

<style scoped>
</style>
