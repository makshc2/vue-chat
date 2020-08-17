import firebase from '@/plugins/firebase';

// eslint-disable-next-line import/prefer-default-export
export const firebaseRegistration = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
