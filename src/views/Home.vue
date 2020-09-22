<template>
 <div>
     Home
     <q-btn @click="logOutUser"
            label="Log out"
     />
    <router-link :to="{name:'UserProfile'}">
      Profile settings
    </router-link>
 </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('auth', ['logOut']),
    async logOutUser() {
      await this.logOut()
        .then(() => {
          this.$router.push({ name: 'Login' });
        });
    },
  },
};
</script>

<style scoped>

</style>
