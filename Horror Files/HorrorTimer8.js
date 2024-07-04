import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

const user = auth.currentUser;
    if (user) {
            try {
                await setDoc(doc(db, "users", user.uid), {
                        elapsedTime: elapsedTime
                            }, { merge: true });
                            console.log("Elapsed time successfully written!");
                        } catch (error) {
                            console.error("Error writing document: ", error);
                        }
                    }

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("textbox").disabled = true;
    document.getElementById("submitbutton").disabled = true;        
    const container = document.getElementById('pixel-art-container8');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
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
    }, 30000);

const scoreElement = document.getElementById('score');
function getScore() {
  const score = localStorage.getItem("score");
  return score ? parseInt(score, 10) : 0;
};

function updateScore(newScore) {
  localStorage.setItem("score", newScore);
  scoreElement.textContent = newScore;
};

let score = getScore();
scoreElement.textContent = score;

let newScore = getScore();

window.checkAnswer46 = function() {
  var userInput = document.getElementById("textbox").value.trim();
  var sentence46 = document.getElementById("sentence46");
  var correctAnswer = "recursion";
  var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';

        if (userInput === correctAnswer) {
            newScore = score + 12; 
            updateScore(newScore);
            sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself  to do it. What is this technique?</span>  <span class='" + spanClass + "'>" + userInput + "</span> <br><br></div>";
            document.getElementById("textbox").disabled = true;
            document.getElementById("submitbutton").disabled = true;
            
                    setTimeout(() => {
                        document.getElementById("sentence48").style.display = "block";
                        document.getElementById("sentence48").classList.add("show");
                    }, 2000);

                    setTimeout(() => {
                        window.location.href = 'https://guillianecantillas.github.io/CodeCraft/IngameHorror9.html';
                    }, 12000);
            
        } else {
            sentence46.innerHTML = "<span style='color: #D284AC;'>In java, there is a technique that does the same. The only difference is that it calls itself to do it. What is this technique?</span>  <span class='" + spanClass + "'>" + userInput + "</span> <br><br></div>";
        };
    };

    console.log("Current Score:", score);
    console.log("New Score:", newScore);  


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
        });