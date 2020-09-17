<template>
  <div class="row items-center justify-center settings-wrapper">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-center">
          <div class="title text-bold">Welcome!</div>
          <span>Tell us about yourself</span>
        </div>
        <div class="from-about-self_wrapper q-mt-lg">
          <ValidationProvider
              tag="div"
              ref="firstName"
              mode="lazy"
              rules="required"
              v-slot="{errors, reset, invalid, validated}">
            <q-input v-model="formData.firstName"
                     dense outlined field no-error-icon
                     @focus="reset"
                     :error="invalid && validated"
                     error-message="Required"
                     label="First name *"
            />
          </ValidationProvider>
          <ValidationProvider
              tag="div"
              ref="lastName"
              mode="lazy"
              rules="required"
              v-slot="{errors, reset, invalid, validated}">
            <q-input v-model="formData.lastName"
                     dense outlined field no-error-icon
                     @focus="reset"
                     :error="invalid && validated"
                     error-message="Required"
                     label="Last name *"
            />
          </ValidationProvider>
          <q-input v-model="formData.country"
                   dense outlined field no-error-icon
                   label="Country"
                   class="q-mb-lg"
          />
          <q-input v-model="formData.city"
                   dense outlined field no-error-icon
                   label="City"
          />
        </div>
        <q-btn color="primary"
               label="Submit"
               @click="submitProfile"
               class="q-mt-lg full-width"
               :disable="!formData.firstName || !formData.lastName"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FirstLoginSettings',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
      },
    };
  },
  methods: {
    ...mapActions('user', ['createUserInfo']),
    submitProfile() {
      this.createUserInfo({ ...this.formData });
    },
  },
};
</script>

<style scoped lang="scss">
.settings-wrapper{
  height: 100vh;
   background-color: aquamarine;
  .my-card{
    width: 300px;
  }
  .title{
    font-size: 20px;
  }
}

</style>
