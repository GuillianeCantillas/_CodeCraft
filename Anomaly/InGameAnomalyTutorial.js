import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const userName = userData.First_Name +  " " + userData.Initial + " " + userData.Last_Name;
                const yearLevel = userData['YearLevel'];
                const course = userData.Course;

                const SecurityCamRef = doc(db, "SecurityCam", user.uid);
                await setDoc(SecurityCamRef, {
                    userName: userName,
                    yearLevel: yearLevel,
                    course: course,
                }, { merge: true });

                const attemptsRef = collection(SecurityCamRef, "attempts");
                const attemptsSnap = await getDocs(attemptsRef);
                const attemptsCount = attemptsSnap.size;

                const newAttemptId = (attemptsCount + 1).toString();
                const newAttemptRef = doc(attemptsRef, newAttemptId);
                await setDoc(newAttemptRef, {
                    score1: 0, 
                    score2: 0,
                    score3: 0,
                    score4: 0,
                    score5: 0,
                    score6: 0,
                    score7: 0,
                    score8: 0,
                    timeTaken: 0,
                    displayText: 0,
                    updatedAt: Timestamp.now()
                });

                console.log(`New attempt ${newAttemptId} added for user: ${user.uid}`);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error adding attempt: ", error);
        }
    } else {
        console.log("User is not logged in.");
    }
});
