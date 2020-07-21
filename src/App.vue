<template>
  <div id="app">
    <Notification />
    <router-view/>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
  components: {
    Notification,
  },
};
</script>
