<template>
 <div class="login-page flex justify-center items-center">
     <q-card align="center" class="q-pa-xl q-gutter-y-lg">
         <div class="title text-bold">Login</div>
         <ValidationProvider
                 tag="div"
                 name="email"
                 ref="email"
                 class="relative-position"
                 rules="required"
                 v-slot="{ errors, reset, invalid, validated}">
         <q-input v-model="email"
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
                  v-model="password"
                  label="Password"
                  class="q-pb-lg"
                  :type="isPwd ? 'password' : 'text'"
                  >
             <template v-slot:append>
                 <q-icon :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                         class="cursor-pointer"
                         size="16px"
                         @click="isPwd = !isPwd"
                 />
             </template>
         </q-input>
         </ValidationProvider>
         <q-btn label="login"
                :loading="submitting"
                color="teal"
                @click="login"
                :disabled="!password || !email"
         >
             <template #loading>
                 <q-spinner-facebook />
             </template>
         </q-btn>
     </q-card>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      email: '',
      isPwd: true,
      submitting: false,
    };
  },
  methods: {
    login() {
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 3000);
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
