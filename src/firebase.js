import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyBJR1_TDXQYdFA56D_Sl-10BFMKaweRr0o",
  authDomain: "vuefirebase-boilerplate.firebaseapp.com",
  databaseURL: "https://vuefirebase-boilerplate.firebaseio.com",
  projectId: "vuefirebase-boilerplate",
  storageBucket: "vuefirebase-boilerplate.appspot.com",
  messagingSenderId: "1036301407436"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();