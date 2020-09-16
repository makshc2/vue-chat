<template>
    <div class="login-page flex justify-center items-center bg-green-2">
        <q-card align="center" class="q-pa-xl q-gutter-y-lg">
            <q-avatar size="150px">
               <img :src="require('@/assets/images/boy-avatar.png')">
            </q-avatar>
            <div class="title text-bold">Login</div>

            <ValidationProvider
                    tag="div"
                    name="email"
                    ref="email"
                    class="relative-position"
                    rules="required"
                    v-slot="{ errors, reset, invalid, validated}">
                <q-input v-model="formData.email"
                         dense outlined field no-error-icon
                         @focus="reset"
                         :error="invalid && validated"
                         error-message="*Required"
                         type="email"
                         label="Email"
                />
            </ValidationProvider>

            <ValidationProvider
                    tag="div"
                    name="password"
                    ref="password"
                    class="relative-position"
                    rules="required"
                    v-slot="{ errors, reset, invalid, validated}">
                <q-input @focus="reset"
                         :error="invalid && validated"
                         error-message="*Required"
                         autocomplete="new-password"
                         dense outlined field no-error-icon
                         color="black"
                         v-model="formData.password"
                         label="Password"
                         class="q-pb-lg"
                         :type="isPwd ? 'password' : 'text'"
                >
                    <template #append>
                        <q-icon :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                                class="cursor-pointer"
                                size="16px"
                                @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>
            </ValidationProvider>

            <q-btn label="login"
                   :loading="loginInProgress"
                   color="teal"
                   @click="loginUser"
                   :disabled="!formData.password || !formData.email"
            >
                <template #loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
            <div class="column q-gutter-y-sm">
                <router-link :to="{name: 'RestorePassword'}">Restore password</router-link>
                <router-link :to="{name: 'Registration'}">Registration</router-link>
            </div>
        </q-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      formData: {
        password: '',
        email: '',
      },
      isPwd: true,
    };
  },
  computed: {
    ...mapGetters('auth', ['loginInProgress', 'isLogin']),
  },
  watch: {
    isLogin: 'redirectToHome',
  },
  methods: {
    ...mapActions('auth', ['login']),
    loginUser() {
      this.login({ ...this.formData });
    },
    redirectToHome(value) {
      if (value) this.$router.push({ name: 'Home' });
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
