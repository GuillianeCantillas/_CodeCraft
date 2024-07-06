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

const updateTable = async () => {
    const courseSelect = document.getElementById('course-select').value;
    const yearLevelSelect = document.getElementById('year-level-select').value;
    const gameSelect = document.getElementById('game-select').value;

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 

    if (gameSelect === 'default') {
        return; 
    }

    try {
        const gameRef = collection(db, gameSelect);
        let q = query(gameRef);

        if (courseSelect !== 'default') {
            q = query(q, where("course", "==", courseSelect));
        }

        if (yearLevelSelect !== 'default') {
            q = query(q, where("yearLevel", "==", yearLevelSelect));
        }

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            const userName = userData.userName;
            const yearLevel = userData.yearLevel;
            const course = userData.course;
            const scores = [
                userData.score1,
                userData.score2,
                userData.score3,
                userData.score4,
                userData.score5,
                userData.score6,
                userData.score7,
                userData.score8
            ];

            let rowHTML = `
                <tr>
                    <td>${userName}</td>
                    <td>${yearLevel}</td>
                    <td>${course}</td>
                    <td>${scores.join(', ')}</td>
                </tr>
            `;

            tableBody.innerHTML += rowHTML;
        });

        console.log("Data retrieved and displayed based on filters.");
    } catch (error) {
        console.error("Error retrieving documents: ", error);
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateTable();
    } else {
        console.log("User is not logged in.");
    }
});
