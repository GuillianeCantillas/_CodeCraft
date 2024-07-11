import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, setDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

let userId;

onAuthStateChanged(auth, async (user) => {
    if (user) {
        userId = user.uid; 

        try {
            const userDocRef = doc(db, "users", userId);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const userName = userData.First_Name + " " + userData.Initial + " " + userData.Last_Name;
                const yearLevel = userData['YearLevel'];
                const course = userData.Course;

                const feedbackRef = doc(db, "feedback", userId);
                await setDoc(feedbackRef, {
                    userName: userName,
                    yearLevel: yearLevel,
                    course: course,
                }, { merge: true });

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

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    async function submitForm(event) {
        event.preventDefault();
        const rating = document.querySelector('input[name="rating"]:checked');
        const improve = document.querySelector('input[name="improve"]:checked');
        const comments = document.getElementById('comments').value;
    
        if (rating && improve && userId) { 
            try {
                const feedbackRef = doc(db, "feedback", userId);
                await updateDoc(feedbackRef, {
                    comments: comments,
                    question: improve.value,
                    rating: rating.value
                }, { merge: true });

                alert("Feedback successfully sent!");
            } catch (error) {
                alert("Error sending feedback: " + error);
            }
        } else {
            alert("Please fill out all fields.");
        }
    }

    feedbackForm.addEventListener('submit', submitForm);
});