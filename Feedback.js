
    src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
    src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDBxsbsyx5cs63zi3TY3mrOVBX1hFKpxUg",
        authDomain: "codecraft-25727.firebaseapp.com",
        projectId: "codecraft-25727",
        storageBucket: "codecraft-25727.appspot.com",
        messagingSenderId: "802309648770",
        appId: "1:802309648770:web:d02bbc354261ff3174df9b",
        measurementId: "G-M2NDHT3KQE"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Function to submit form data to Firestore
    function submitForm(event) {
        event.preventDefault();
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const improve = document.querySelector('input[name="improve"]:checked').value;
        const comments = document.getElementById('comments').value;

        db.collection("feedback").add({
            rating: rating,
            improve: improve,
            comments: comments,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Feedback successfully sent!");
            document.getElementById('formPopup').style.display = 'none';
        }).catch((error) => {
            alert("Error sending feedback: " + error);
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('openForm').addEventListener('click', function() {
            document.getElementById('formPopup').style.display = 'block';
        });

        document.getElementById('closeForm').addEventListener('click', function() {
            document.getElementById('formPopup').style.display = 'none';
        });

        document.getElementById('feedbackForm').addEventListener('submit', submitForm);
    });


  