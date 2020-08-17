<template>
    <div class="login-page flex justify-center items-center bg-green-2">
        <q-card align="center" class="q-pa-xl q-gutter-y-md">
            <q-avatar size="150px">
                <img :src="require('@/assets/images/boy-avatar.png')">
            </q-avatar>
            <div class="title text-bold">Registration</div>

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
            <ValidationProvider
                    tag="div"
                    name="password"
                    ref="password"
                    class="relative-position"
                    rules="required"
                    v-slot="{ errors, reset }">
            <q-input @focus="reset"
                     :error="checkPassword !== formData.password"
                     error-message="Password doesn`t match"
                     dense outlined field no-error-icon
                     color="black"
                     v-model="checkPassword"
                     label="Repeat password"
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

            <q-btn label="Registration"
                   :loading="loginInProgress"
                   color="teal"
                   class="q-mt-xl"
                   @click="registerUser"
                   :disabled="!formData.password ||
                   !formData.email ||
                   checkPassword !==formData.password"
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
  name: 'RegistrationForm',
  data() {
    return {
      formData: {
        password: '',
        email: '',
      },
      checkPassword: '',
      isPwd: true,
    };
  },
  computed: {
    ...mapGetters('auth', ['loginInProgress']),
  },
  methods: {
    ...mapActions('registration', ['registration']),
    registerUser() {
      this.registration({ ...this.formData });
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
