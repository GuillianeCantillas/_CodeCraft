import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const db = getFirestore(app);
document.addEventListener("DOMContentLoaded", function() {
    showToast();

    const scoreElement = document.getElementById('score');

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const hauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);
                const hauntedAlgorithmsSnap = await getDoc(hauntedAlgorithmsRef);

                if (hauntedAlgorithmsSnap.exists()) {
                    const scoresData = hauntedAlgorithmsSnap.data();
                    const totalScore = scoresData.score1 + scoresData.score2 + scoresData.score3 + scoresData.score4 + scoresData.score5 + scoresData.score6 + scoresData.score7 + scoresData.score8;
                    scoreElement.textContent = totalScore;
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error retrieving user data:", error);
            }
        } else {
            console.log("No user is signed in.");
        }
    });

    setTimeout(function() {
        var h2Element = document.getElementById('hala');
        h2Element.style.display = 'block';
        h2Element.classList.add('show');

        setTimeout(function() {
            h2Element.classList.add('show-glitch');
        }, 2000); 
    }, 3000); 
});

function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 3000);
}