import firebase from '@/plugins/firebase';

export const firebaseRegistration = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
