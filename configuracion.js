
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCMBFNgG584300GC70pk9Jfk8JfFvBCUJg",
    authDomain: "bitacoraald.firebaseapp.com",
    projectId: "bitacoraald",
    storageBucket: "bitacoraald.firebasestorage.app",
    messagingSenderId: "829121257810",
    appId: "1:829121257810:web:4da1babd8c5a0773801a8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();