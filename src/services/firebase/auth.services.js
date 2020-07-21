import firebase from '@/plugins/firebase';

export const firebaseLogin = async (email, password) => {
  try {
    const data = await firebase.auth().signInWithEmailAndPassword(email, password);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const firebaseLogOut = async () => {
  try {
    const data = await firebase.auth().signOut();
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
