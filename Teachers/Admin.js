import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";;

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
const auth = getAuth();
const db = getFirestore();

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userDoc = await getDoc(doc(db, "teachers", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            document.getElementById('userName').textContent = userData.Name;
            document.getElementById('emailAddress').textContent = userData.Email;
            document.getElementById('Course').textContent = userData.Course;

        } else {
            console.error("No such document!");
        }
    } else {
        console.log("User is signed out");
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    alert("You have been logged out.");
    window.location.href = 'https://guillianecantillas.github.io/CodeCraft/index.html'; 
  });