import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBxsbsyx5cs63zi3TY3mrOVBX1hFKpxUg",
    authDomain: "codecraft-25727.firebaseapp.com",
    projectId: "codecraft-25727",
    storageBucket: "codecraft-25727.appspot.com",
    messagingSenderId: "802309648770",
    appId: "1:802309648770:web:d02bbc354261ff3174df9b",
    measurementId: "G-M2NDHT3KQE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const email = document.getElementById('emailAddress');
const password = document.getElementById('password');

const loginButton = document.getElementById('btnSubmit');
loginButton.addEventListener("click", async function() {
    try {
        const emailValue = email.value;
        const passwordValue = password.value;

        if (!emailValue || !passwordValue) {
            alert("Please fill out all fields.");
            return;
        }

        const teachersRef = collection(db, "teachers");
        const querySnapshot = await getDocs(query(teachersRef, where("Email", "==", emailValue)));

        if (!querySnapshot.empty) {
            const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
            const user = userCredential.user;
            window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/HomePageTeachers.html';
        } else {
            const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
            const user = userCredential.user;
            window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/HomePageActual.html';
        }
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
});