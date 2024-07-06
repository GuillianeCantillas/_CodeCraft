import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

async function saveUserData(user, score) {
    try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const userName = `${userData.First_Name} ${userData.Initial} ${userData.Last_Name}`;
            const yearLevel = userData['YearLevel'];
            const course = userData.Course;

            const HauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);

            await updateDoc(HauntedAlgorithmsRef, {
                score7: score, 
            });

            console.log("Score updated in HauntedAlgorithms for user:", user.uid);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating score:", error);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("textbox").disabled = true;
    document.getElementById("submitbutton").disabled = true;        
    const container = document.getElementById('pixel-art-container8');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scoreElement = document.getElementById('score');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    let hintIndex = 0;
    const hints = [
            "Hint 1: This technique relies on the call stack to keep track of function calls.",
            "Hint 2: This is known to anser the factorial calculation or Fibonacci series.",
            "Hint 3: This function usually has 2 main parts.The base case and the recursive case."];

    const updateButtonPositions = () => {
    const containerRect = container.getBoundingClientRect();
        
        document.querySelector('.button1').style.left = `${containerRect.left - 60}px`;
        document.querySelector('.button1').style.top = `${containerRect.top + 310}px`;
        
        document.querySelector('.button2').style.left = `${containerRect.left + 20}px`;
        document.querySelector('.button2').style.top = `${containerRect.top + 310}px`;
        
        document.querySelector('.button3').style.left = `${containerRect.left + 760}px`;
        document.querySelector('.button3').style.top = `${containerRect.top + 310}px`;
        
        document.getElementById('score-container').style.left = `${containerRect.left + 740}px`;
        document.getElementById('score-container').style.top = `${containerRect.top - 255}px`;
        
        document.getElementById('hintBox').style.left = `${containerRect.left + 710}px`;
        document.getElementById('hintBox').style.top = `${containerRect.top + 340}px`;
    };

    updateButtonPositions();
    window.addEventListener('resize', updateButtonPositions);
    window.addEventListener('scroll', updateButtonPositions);

    let currentFrameIndex = 0;
    let interval = 1000;
    const frames8 = container.querySelectorAll(".pixel-art-frame");
    let animationInterval;

    function showNextFrame(frames) {
        frames[currentFrameIndex].classList.remove("active");
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        frames[currentFrameIndex].classList.add("active");
    }

    function startAnimation(frames) {
        currentFrameIndex = 0;
        frames[currentFrameIndex].classList.add("active");
        animationInterval = setInterval(() => showNextFrame(frames), interval);
    }

    setTimeout(() => {
        startAnimation(frames8);
    }, 0);

    setTimeout(() => {
        document.getElementById("sentence43").style.display = "block";
        document.getElementById("sentence43").classList.add("show");
    }, 2000);

    setTimeout(() => {
        document.getElementById("sentence44").style.display = "block";
        document.getElementById("sentence44").classList.add("show");
    }, 8000);

    setTimeout(() => {
        document.getElementById("sentence45").style.display = "block";
        document.getElementById("sentence45").classList.add("show");
    }, 15000);

    setTimeout(() => {
        document.getElementById("sentence46").style.display = "block";
        document.getElementById("sentence46").classList.add("show");
    }, 23000);

    setTimeout(() => {
        document.getElementById("sentence47").style.display = "block";
        document.getElementById("sentence47").classList.add("show");
        document.getElementById("textbox").disabled = false;
        document.getElementById("submitbutton").disabled = false;
        startChallenge();
    }, 30000);

window.checkAnswer46 = function () {
        const userInput = document.getElementById("textbox").value.trim().toLowerCase();
        handleSubmission(userInput);
        };

function handleSubmission(userInput) {
    let endTime = new Date(); 
    let timeTakenMilliseconds = endTime - startTime; 
    let timeTakenInSeconds = Math.floor(timeTakenMilliseconds / 1000);
  var sentence46 = document.getElementById("sentence46");
  var correctAnswer = "recursion";
  var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';

        if (userInput === correctAnswer) {
            sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself  to do it. What is this technique?</span>  <span class='" + spanClass + "'>" + userInput + "</span> <br><br></div>";
            document.getElementById("textbox").disabled = true;
            document.getElementById("submitbutton").disabled = true;
            showToast1();
            let score = Scoring(timeTakenInSeconds);
            pauseTimer();
            
                    setTimeout(() => {
                        document.getElementById("sentence48").style.display = "block";
                        document.getElementById("sentence48").classList.add("show");
                    }, 2000);

                    setTimeout(() => {
                        window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/_CodeCraft/Horror%20Files/IngameHorror9.html';
                    }, 12000);

                    onAuthStateChanged(auth, async (user) => {
                        if (user) {
                            await saveUserData(user, score);
                        } else {
                            console.log("No user is signed in.");
                        }
                    });
            
        } else {
            sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself to do it. What is this technique?</span>  <span class='" + spanClass + "'>" + userInput + "</span> <br><br></div>";
        };
    };

    window.updateSentence46 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence46 = document.getElementById("sentence46");
        sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself to do it. What is this technique?</span> " + userInput + "<br><br></div>";

    };
            window.resetForm = function () {
                document.getElementById("answerForm").reset();
                sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself to do it. What is this technique? _________ </span><br><br></div>";
                document.getElementById("textbox").disabled = false;
                document.getElementById("sentence23").style.display = "none";
                document.getElementById("sentence23").classList.remove("show");

                score = 0;
                scoreElement.textContent = score;
            };

            window.undoInput = function () {
                var textbox = document.getElementById("textbox");
                textbox.value = textbox.value.slice(0, -1);
                updateSentence46();
            };
            window.showHint = function () {
            const hintBox = document.getElementById("hintBox");
            const hintText = document.getElementById("hintText");

            if (hintIndex < hints.length) {
                hintText.textContent = hints[hintIndex];
                hintBox.style.display = "block";
                hintIndex++;
            } else {
                hintText.textContent = "No more hints available.";
            }};
            let startTime;
            let timer;
            let countdown;
            const duration = 60 * 60; 
    
            if (localStorage.getItem('countdown')) {
                countdown = parseInt(localStorage.getItem('countdown'), 10); 
            } else {
                countdown = duration;
            }
    
            function startTimer() {
                clearInterval(timer);
                updateTimer();
                timer = setInterval(updateTimer, 1000);
            }
    
            function pauseTimer() {
                clearInterval(timer);
            }

    
            function updateTimer() {
                let hours = Math.floor(countdown / 3600); 
                let minutes = Math.floor((countdown % 3600) / 60); 
                let seconds = countdown % 60; 
                let displayText = `Time left: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
                document.getElementById('timer').textContent = displayText;
    
                if (countdown <= 0) {
                    clearInterval(timer);
                    alert('Time is up!');
                    resetTimer(); 
                    return; 
                }
    
                countdown--; 
                localStorage.setItem('countdown', countdown.toString()); 
            }
    
            function resetTimer() {
                countdown = duration;
                localStorage.setItem('countdown', countdown.toString()); 
                startTimer(); 
            }
            
            function startChallenge() {
                startTime = new Date();
                startTimer();
            }
                
                function Scoring(timeTakenInSeconds) {
                    let baseScore = 11;
                    let bonusPoints = 0;
    
                    if (timeTakenInSeconds <= 30) {
                        bonusPoints = 4;
                        showToast1("4 bonus points");
                    } else if (timeTakenInSeconds <= 60) {
                        bonusPoints = 3;
                        showToast1("3 bonus points");
                    } else if (timeTakenInSeconds <= 120) {
                        bonusPoints = 2;
                        showToast1("2 bonus points");
                    }
    
                    let score = baseScore + bonusPoints;
                    scoreElement.textContent = score;
                    return score;
                }
    
                function showToast1(message) {
                    const toastContainer = document.getElementById('toastContainer');
                    toastContainer.textContent = message;
                    toastContainer.className = "toast1 show";
    
                    setTimeout(function () {
                        toastContainer.className = toastContainer.className.replace("show", "");
                    }, 5000);
                }
    
        });

