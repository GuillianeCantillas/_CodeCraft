import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";;
  
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


var enteremail = document.getElementById('emailAddress');
var enterpassword = document.getElementById('password');
var enterCourse = document.getElementById('Course');


const register = document.getElementById("btnSubmit");
register.addEventListener("click", async function() { 
    try {

        if (!enteremail.value || !enterpassword.value || !enterCourse.value) {
           alert("Please fill out all fields."); 
        }

        if (!enteremail.value.includes("@feualabang.edu.ph")) {
            alert("Please enter a valid @feualabang.edu.ph email address.");
        }

        const userCredential = await createUserWithEmailAndPassword(auth, enteremail.value, enterpassword.value);
        const user = userCredential.user;
 
        await setDoc(doc(db, "teachers", userCredential.user.uid), {
            Email: emailAddress.value,
            Password: enterpassword.value,
            Course: enterCourse.value,

        }); window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/HomepageActual.html';
    } catch (error) {
        // Handle errors
        console.error("Registration error:", error.message);
        alert(error.message); 
    }
});

const close = document.getElementById('close');
const modal = document.getElementById('modal_container');
const termsLink = document.getElementById('terms-link');

termsLink.addEventListener('click', (e) => {
    modal.classList.add('show');
        });

close.addEventListener('click', () => {
    modal.classList.remove('show');
        });

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
    
        togglePassword.addEventListener('click', function () {
          const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
          password.setAttribute('type', type);
    
          // Toggle the eye icon
          this.classList.toggle('bxs-show');
          this.classList.toggle('bxs-hide');
        });
