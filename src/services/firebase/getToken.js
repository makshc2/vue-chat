import firebase from '@/plugins/firebase';

// eslint-disable-next-line import/prefer-default-export
export const firebaseGetToken = async () => {
  try {
    const token = await firebase.auth().currentUser.getIdToken();
    return token;
  } catch (e) {
    return Promise.reject(e);
  }
};
