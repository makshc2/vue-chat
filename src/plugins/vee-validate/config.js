import Vue from 'vue';
import {
  ValidationProvider, ValidationObserver, extend,
} from 'vee-validate';
import { required, email, confirmed } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('confirmed', confirmed);
extend('password', {
  validate: (value) => /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g.test(value),
});
extend('user_name', {
  validate: (value) => /^[A-Za-z0-9]{0,14}$/.test(value),
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
