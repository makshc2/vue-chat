import firebase from '@/plugins/firebase';
import router from '@/router';
// eslint-disable-next-line import/prefer-default-export
export const firebaseResetPassword = async (email) => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        router.push({ name: 'Login' });
      });
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
