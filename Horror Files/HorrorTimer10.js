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
                    const latestAttemptRef = collection(hauntedAlgorithmsRef, "attempts");
                    const latestAttemptSnapshot = await getDocs(latestAttemptRef);

                    if (!latestAttemptSnapshot.empty) {
                        const latestAttemptDoc = latestAttemptSnapshot.docs[latestAttemptSnapshot.size - 1];
                        const latestAttemptId = latestAttemptDoc.id;

                        const scores = [
                            latestAttemptDoc.data().score1,
                            latestAttemptDoc.data().score2,
                            latestAttemptDoc.data().score3,
                            latestAttemptDoc.data().score4,
                            latestAttemptDoc.data().score5,
                            latestAttemptDoc.data().score6,
                            latestAttemptDoc.data().score7,
                            latestAttemptDoc.data().score8,
                        ];
                        const totalScore = scores.reduce((acc, score) => acc + score, 0);

                        const attemptNumber = latestAttemptSnapshot.size;
                        const attemptDate = latestAttemptDoc.data().updatedAt.toDate();

                        await updateDoc(latestAttemptDoc.ref, {
                            timeTaken: timeTaken,
                            displayText: `${hours} hours, ${minutes} minutes, and ${seconds} seconds`,
                        });

                        scoreElement.textContent = totalScore;
                        displayTextElement.textContent = displayText;
                        attemptsElement.textContent = attemptNumber;

                        console.log('Scores from the latest attempt retrieved and displayed:', totalScore);
                        console.log('Time taken updated in Firestore for latest attempt:', timeTaken);
                    } else {
                        console.log("No attempts found.");
                    }
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