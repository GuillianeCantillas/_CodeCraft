import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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
    const timeTakenElement = document.getElementById('time-taken');
    const countdownElement = document.getElementById('countdown');
    const displayTextElement = document.getElementById('timer');

    const duration = 60 * 60; // 1 hour in seconds
    let countdown = localStorage.getItem('countdown') ? parseInt(localStorage.getItem('countdown'), 10) : duration;
    const timeTaken = duration - countdown;

    let hours = Math.floor(timeTaken / 3600);
    let minutes = Math.floor((timeTaken % 3600) / 60);
    let seconds = timeTaken % 60;
    let  displayText = `Time taken: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const hauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);
                const hauntedAlgorithmsSnap = await getDoc(hauntedAlgorithmsRef);

                if (hauntedAlgorithmsSnap.exists()) {
                    const scoresData = hauntedAlgorithmsSnap.data();
                    const totalScore = scoresData.score1 + scoresData.score2 + scoresData.score3 + scoresData.score4 + scoresData.score5 + scoresData.score6 + scoresData.score7 + scoresData.score8;
                    scoreElement.textContent = totalScore;
                    displayTextElement.textContent = `Time taken: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
                } else {
                    console.log("No such document!");
                }

                await updateDoc(hauntedAlgorithmsRef, {
                    timeTaken: timeTaken,
                    countdown: countdown,
                    displayText: `Time taken: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`,
                    updatedAt: serverTimestamp()
                }, { merge: true });

                console.log('Time taken, countdown, display text saved to Firestore:', timeTaken, countdown, displayText);

            } catch (error) {
                console.error("Error retrieving user data or saving values:", error);
            }
        } else {
            console.log("No user is signed in.");
        }
    });

    setTimeout(function() {
        var h2Element = document.getElementById('hala');
        if (h2Element) {
            h2Element.style.display = 'block';
            h2Element.classList.add('show');

            setTimeout(function() {
                h2Element.classList.add('show-glitch');
            }, 2000);
        }
    }, 3000);

    function showToast() {
        var toast = document.getElementById("toast");
        if (toast) {
            toast.className = "toast show";
            setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 3000);
        }
    }
});
