<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true">
    <div class="d-flex">
      <div class="toast-body">
        <slot></slot>
        <button type="button" class="btn btn-secondary btn-sm" @click="undoDeletion">Undo</button>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeletionWarning',
  props: ['timeoutId'],
  methods: {
    undoDeletion() {
      clearTimeout(this.timeoutId);
    }
  }
}
</script>

<style scoped>
</style>
