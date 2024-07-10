import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, serverTimestamp, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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
    const displayTextElement = document.getElementById('displayText');
    const attemptsElement = document.getElementById('attempts');
    const attemptDateElement = document.getElementById('attempt-date');

    const duration = 60 * 60; // 1 hour in seconds
    let countdown = localStorage.getItem('countdown') ? parseInt(localStorage.getItem('countdown'), 10) : duration;
    const timeTaken = duration - countdown;

    let hours = Math.floor(timeTaken / 3600);
    let minutes = Math.floor((timeTaken % 3600) / 60);
    let seconds = timeTaken % 60;
    let displayText = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const hauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);
                const hauntedAlgorithmsSnap = await getDoc(hauntedAlgorithmsRef);

                if (hauntedAlgorithmsSnap.exists()) {
                    const scoresData = hauntedAlgorithmsSnap.data();
                    const totalScore = scoresData.score1 + scoresData.score2 + scoresData.score3 + scoresData.score4 + scoresData.score5 + scoresData.score6 + scoresData.score7 + scoresData.score8;
                    scoreElement.textContent = totalScore;
                    displayTextElement.textContent = displayText;

                    const attemptsRef = collection(hauntedAlgorithmsRef, "attempts");
                    await addDoc(attemptsRef, {
                        score1: scoresData.score1,
                        score2: scoresData.score2,
                        score3: scoresData.score3,
                        score4: scoresData.score4,
                        score5: scoresData.score5,
                        score6: scoresData.score6,
                        score7: scoresData.score7,
                        score8: scoresData.score8,
                        timeTaken: timeTaken,
                        displayText: displayText,
                        attemptDate: serverTimestamp()
                    });

                    const attemptsSnapshot = await getDocs(attemptsRef);
                    const attemptsCount = attemptsSnapshot.size;
                    const lastAttempt = attemptsSnapshot.docs[attemptsCount - 1].data();
                    const attemptDate = lastAttempt.attemptDate.toDate().toLocaleString();

                    attemptsElement.textContent = attemptsCount;
                    attemptDateElement.textContent = attemptDate;

                    console.log('Time taken, countdown, display text, and attempts saved to Firestore:', timeTaken, countdown, displayText);
                } else {
                    console.log("No such document!");
                }
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
