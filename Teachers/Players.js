import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

const gameMapping = {
    "Haunted Algorithms": "HauntedAlgorithms",
    "Codebreaker Detective": "CodeBreaker",
    "Security Cam Coder": "SecurityCam",
    "Arcade Mania": "ArcadeMania"
};

const updateTable = async () => {
    const courseSelect = document.getElementById('course-select').value;
    const yearLevelSelect = document.getElementById('year-level-select').value;
    const gameSelect = document.getElementById('game-select').value;

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 

    if (gameSelect === 'default') {
        return; 
    }

    const collectionName = gameMapping[gameSelect];
    if (!collectionName) {
        console.error("Invalid game selection");
        return;
    }

    try {
        const gameRef = collection(db, collectionName);
        let q = query(gameRef);

        if (courseSelect !== 'default') {
            q = query(q, where("course", "==", courseSelect));
        }

        if (yearLevelSelect !== 'default') {
            q = query(q, where("yearLevel", "==", yearLevelSelect));
        }

        const querySnapshot = await getDocs(q);

        for (const userDoc of querySnapshot.docs) {
            const userData = userDoc.data();
            const userName = userData.userName;
            const yearLevel = userData.yearLevel;
            const course = userData.course;
            const time = userData.displayText;

            const attemptsRef = collection(userDoc.ref, "attempts");
            const attemptsSnapshot = await getDocs(attemptsRef);
            const attemptsCount = attemptsSnapshot.size;

            let attemptsDetails = '';
            attemptsSnapshot.forEach((attemptDoc) => {
                const attemptData = attemptDoc.data();
                const scores = [
                    attemptData.score1,
                    attemptData.score2,
                    attemptData.score3,
                    attemptData.score4,
                    attemptData.score5,
                    attemptData.score6,
                    attemptData.score7,
                    attemptData.score8,
                ];
                const timeTaken = attemptData.timeTaken;
                const attemptDate = attemptData.updatedAt.toDate().toLocaleString();
                
                attemptsDetails += `<br>Attempt ${attemptDoc.id}: ${scores.join(', ')} (Time: ${timeTaken}s, Date: ${attemptDate})`;
            });

            let rowHTML = `
                <tr>
                    <td>${userName}</td>
                    <td>${yearLevel}</td>
                    <td>${course}</td>
                    <td>${attemptsDetails}</td>
                    <td>${time}</td>
                    <td>${attemptsCount}</td>
                </tr>
            `;

            tableBody.innerHTML += rowHTML;
        }

        console.log("Data retrieved and displayed based on filters.");
    } catch (error) {
        console.error("Error retrieving documents: ", error);
    }
};

window.updateTable = updateTable; 

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateTable(); 
    } else {
        console.log("User is not logged in.");
    }
});
