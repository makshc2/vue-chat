<template>
    <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notification',
  computed: {
    ...mapGetters(['lastMessage']),
  },
  methods: {
    showNotify(value) {
      this.$q.notify({
        position: 'top',
        ...value,
      });
    },
  },
  watch: {
    lastMessage: 'showNotify',
  },
};
</script>

<style scoped>

</style>
