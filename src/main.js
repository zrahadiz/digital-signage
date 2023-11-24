import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChgq5CUzjcuBhbHvDANVIJGMuRt7GgP2I",
    authDomain: "digisignage-7f419.firebaseapp.com",
    projectId: "digisignage-7f419",
    storageBucket: "digisignage-7f419.appspot.com",
    messagingSenderId: "562866923104",
    appId: "1:562866923104:web:d8cf7eb1c90362c9b68505",
    storageBucket: "gs://digisignage-7f419.appspot.com"
};

// Initialize Firebase
const frapp = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
getStorage(frapp);
const db = getFirestore(frapp);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
export {db}