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
                        const container = document.getElementById('pixel-art-container6');
                        const blackScreen = document.getElementById("black-screen");
                        const allImages = container.querySelectorAll('.pixel-art-frame');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');

                        let startTime = Date.now();

                        let hintIndex = 0;
                        const hints = [
                                "Hint 1: This statement immediately exits the nearest enclosing loop",
                                "Hint 2: Use this to terminate a loop prematurely when a certain condition is met.",
                                "Hint 3: This statement will only exit the innermost loop it is placed in"];
            
                let currentFrameIndex = 0;
                let interval = 1000;
                const frames6 = container.querySelectorAll(".pixel-art-frame");
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
                    startAnimation(frames6);
                }, 0);
            
                setTimeout(() => {
                    document.getElementById("sentence24").style.display = "block";
                    document.getElementById("sentence24").classList.add("show");
                }, 1000);
            
                setTimeout(() => {
                    document.getElementById("sentence25").style.display = "block";
                    document.getElementById("sentence25").classList.add("show");
                }, 5000);
            
                setTimeout(() => {
                    document.getElementById("sentence28").style.display = "block";
                    document.getElementById("sentence28").classList.add("show");
                }, 11000);
            
                setTimeout(() => {
                    document.getElementById("sentence29").style.display = "block";
                    document.getElementById("sentence29").classList.add("show");
                    document.getElementById("textbox").disabled = false;
                    document.getElementById("submitbutton").disabled = false;
                }, 20000);
            
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
            
            window.checkAnswer29 = function() {
              var userInput = document.getElementById("textbox").value.trim();
              var sentence29 = document.getElementById("sentence29");
              var correctAnswer = "break";
              var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
            
                if (userInput === correctAnswer) {
                    const endTime = Date.now();
                    const elapsedTime = (endTime - startTime) / 1000;
                    console.log(`Time taken: ${elapsedTime} seconds`);
                    let newScore = score + 12; 
                    updateScore(newScore);
                    sentence29.innerHTML = "<span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>i</span> = 0<span style='color: #FF7F3E;'>;</span><br>" +
                        "<span style='color: #FF7F3E;'> while(<span style='color: #1679AB;'>i</span> < 10)</span>  {<br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #1679AB;'>i++</span><span style='color: #FF7F3E;'>;</span><br>" + 
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>if ( <span style='color: #1679AB;'>i</span> == 3 ) </span> {<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span><span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp;  }<br>" +
                        "};<br><br></br>";
                    document.getElementById("textbox").disabled = true;
                    document.getElementById("submitbutton").disabled = true;
                
                    setTimeout(() => {
                        document.getElementById("sentence30").style.display = "block";
                        document.getElementById("sentence30").classList.add("show");
                    }, 2000);
            
                        setTimeout(() => {
                            document.getElementById("black-screen").classList.add("show");
                            setTimeout(() => {
                                window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror7.html';
                            }, 3000);
                            }, 9000);
            
                    
                } else {
                    sentence29.innerHTML = "<span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>i</span> = 0<span style='color: #FF7F3E;'>;</span><br>" +
                        "<span style='color: #FF7F3E;'> while(<span style='color: #1679AB;'>i</span> < 10)</span>  {<br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #1679AB;'>i++</span><span style='color: #FF7F3E;'>;</span><br>" + 
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>if ( <span style='color: #1679AB;'>i</span> == 3 ) </span> {<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span><span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp;  }<br>" +
                        "};<br><br></br>";
                };
            };
            
            
                console.log("Current Score:", score);
                console.log("New Score:", newScore);  
            
            
                window.updateSentence29 = function () {
                    var userInput = document.getElementById("textbox").value.trim();
                    var sentence29 = document.getElementById("sentence29");
                    sentence29.innerHTML = "<span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>i</span> = 0<span style='color: #FF7F3E;'>;</span><br>" +
                        "<span style='color: #FF7F3E;'> while(<span style='color: #1679AB;'>i</span> < 10)</span>  {<br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #1679AB;'>i++</span><span style='color: #FF7F3E;'>;</span><br>" + 
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>if ( <span style='color: #1679AB;'>i</span> == 3 ) </span> {<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + userInput + "<span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp;  }<br>" +
                        "};<br><br></br>";
                };
                        window.resetForm = function () {
                            document.getElementById("answerForm").reset();
                            sentence29.innerHTML = "<span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>i</span> = 0<span style='color: #FF7F3E;'>;</span><br>" +
                        "<span style='color: #FF7F3E;'> while(<span style='color: #1679AB;'>i</span> < 10)</span>  {<br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>System.out.println(<span style='color: #1679AB;'>i</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #1679AB;'>i++</span><span style='color: #FF7F3E;'>;</span><br>" + 
                            "&nbsp; &nbsp; &nbsp;  <span style='color: #FF7F3E;'>if ( <span style='color: #1679AB;'>i</span> == 3 ) </span> {<br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _____<span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp;  }<br>" +
                        "};<br><br></br>";
                            document.getElementById("textbox").disabled = false;
                            document.getElementById("sentence30").style.display = "none";
                            document.getElementById("sentence30").classList.remove("show");
            
                            score = 0;
                            scoreElement.textContent = score;
                        };
            
                        window.undoInput = function () {
                            var textbox = document.getElementById("textbox");
                            textbox.value = textbox.value.slice(0, -1);
                            updateSentence29();
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
            
            