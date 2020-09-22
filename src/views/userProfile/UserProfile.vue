<template>
  <div class="wrapper-card row items-center justify-center">
    <q-card v-if="user" class="user-card q-pa-md">
      <h5 class="text-center">User settings</h5>
      <q-input dense field no-error-icon v-model="user[0].email" label="Email" disable></q-input>
      <q-input dense field no-error-icon v-model="user[0].lastName" label="Last Name"></q-input>
      <q-input dense field no-error-icon v-model="user[0].firstName" label="First Name"></q-input>
      <q-input dense field no-error-icon v-model="user[0].country" label="Country"></q-input>
      <q-input dense field no-error-icon v-model="user[0].city" label="City"></q-input>
      <div class="row justify-center q-gutter-x-lg q-ma-md">
        <q-btn @click="sendUserData" color="primary">Save</q-btn>
        <q-btn @click="backPage" color="red">Back to homepage</q-btn>
      </div>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserProfile',
  data() {
    return {
      formData: {
        lastName: '',
      },
    };
  },
  computed: {
    ...mapGetters('user', ['user']),
  },
  methods: {
    ...mapActions('user', ['createUserInfo']),
    sendUserData() {
      this.createUserInfo({ ...this.user[0] });
    },
    backPage() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper-card{
  height: 100vh;
  background-color: aquamarine;
  .user-card{
    width: 100%;
    max-width: 400px;
  }
}

</style>
