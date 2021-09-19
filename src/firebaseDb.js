/* eslint-disable */
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCMVleLSRJQu57tK4GnwSHUw3v6BmkYEW4',
  authDomain: 'my-subscription-55cbc.firebaseapp.com',
  projectId: 'my-subscription-55cbc',
  storageBucket: 'my-subscription-55cbc.appspot.com',
  messagingSenderId: '481156500614',
  appId: '1:481156500614:web:f135bb96dc1b9cf6d89507'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
