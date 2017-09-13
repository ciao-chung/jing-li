<template>
  <div>
    <alert-notify></alert-notify>
    <dialog-modal></dialog-modal>
    <notification></notification>
    <jump></jump>
  </div>
</template>

<script>
export default {
  components: {
    'alert-notify': require('components/global/alert.vue'),
    'dialog-modal': require('components/global/dialog.vue'),
    'jump': require('components/global/jump.vue'),
    'notification': require('components/global/notification.vue'),
  }
}
</script>