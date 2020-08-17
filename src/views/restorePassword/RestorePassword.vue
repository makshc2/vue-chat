<template>
    <div class="login-page flex justify-center items-center bg-green-2">
        <q-card align="center" class="q-pa-xl q-gutter-y-md">
            <q-avatar size="150px">
                <img :src="require('@/assets/images/boy-avatar.png')">
            </q-avatar>
        <div class="title text-bold">Restore password</div>
        <ValidationProvider
                tag="div"
                ref="email"
                mode="lazy"
                rules="required|email"
                v-slot="{errors, reset, invalid, validated}">
            <q-input v-model="formData.email"
                     dense outlined field no-error-icon
                     @focus="reset"
                     :error="invalid && validated"
                     error-message="Field not valid"
                     type="Enter email"
                     label="Email"
            />
        </ValidationProvider>
            <q-btn label="Restore password"
                   :loading="loginInProgress"
                   color="teal"
                   class="q-mt-xl"
                   @click="restorePassword"
                   :disabled="!formData.email"
            >
                <template #loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
            <div class="column q-gutter-y-sm">
                <router-link :to="{name: 'Login'}">Login</router-link>
            </div>
        </q-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RestorePassword',
  data() {
    return {
      formData: {
        email: '',
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['loginInProgress']),
  },
  methods: {
    ...mapActions('resetPassword', ['resetPassword']),
    restorePassword() {
      this.resetPassword({ ...this.formData });
    },
  },
};
</script>

<style scoped lang="scss">
    .login-page{
        height: 100vh;
    }
    .title{
        font-size: 18px;
    }
</style>
