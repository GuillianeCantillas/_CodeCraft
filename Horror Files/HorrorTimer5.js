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
                        const container = document.getElementById('pixel-art-container5');
                        const allImages = container.querySelectorAll('.pixel-art-frame');
                        const img33 = document.getElementById('img33');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        const answerForm = document.getElementById('answerForm');

                        let startTime = Date.now();
                        
                        const sentences = [
                            "sentence16",
                            "sentence17",
                            "sentence20",
                            "sentence21",
                            "sentence22"
                        ];
                    
                        const additionalElements = [
                            button1,
                            button2,
                            button3,
                            scores,
                            hinting,
                            answerForm
                        ];
                    
                        allImages.forEach(img => {
                            if (img.id !== 'img33') {
                                img.classList.add('darken');
                            }
                        });
                    
                        function showSentence(id, delay) {
                            setTimeout(() => {
                                const sentence = document.getElementById(id);
                                sentence.style.display = "block";
                                sentence.classList.add("show");
                            }, delay);
                        }
                    
                        function flashElements() {
                            sentences.forEach(id => {
                                const sentence = document.getElementById(id);
                                if (sentence.classList.contains('show')) {
                                    sentence.classList.add('flashing');
                                }
                            });
                    
                            additionalElements.forEach(el => {
                                if (el) {
                                    el.classList.add('flashing');
                                }
                            });
                        }
                    
                        function removeFlashFromElements() {
                            sentences.forEach(id => {
                                const sentence = document.getElementById(id);
                                sentence.classList.remove('flashing');
                            });
                    
                            additionalElements.forEach(el => {
                                if (el) {
                                    el.classList.remove('flashing');
                                }
                            });
                        }
                    
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    flashElements();
                                    img33.classList.add('brighten');
                                    document.body.classList.add('bg-change');
                                    allImages.forEach(img => {
                                        if (img.id !== 'img33') {
                                            img.classList.remove('darken');
                                        }
                                    });
                                    setTimeout(() => {
                                        img33.classList.remove('brighten');
                                        document.body.classList.remove('bg-change');
                                    }, 1000);
                                } else {
                                    removeFlashFromElements();
                                    allImages.forEach(img => {
                                        if (img.id !== 'img33') {
                                            img.classList.add('darken');
                                        }
                                    });
                                }
                            });
                        }, { threshold: 0.5 });
                    
                        observer.observe(img33);
                    
                        showSentence("sentence16", 1000);
                        showSentence("sentence17", 6000);
                        showSentence("sentence18", 9000);
                        showSentence("sentence19", 13000);
                        showSentence("sentence20", 20000);
                        showSentence("sentence21", 30000);
                        showSentence("sentence22", 35000);
                    
                    
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
                        const frames5 = container.querySelectorAll(".pixel-art-frame");
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
                            startAnimation(frames5);
                        }, 2000);
                    
                        setTimeout(() => {
                            document.getElementById("sentence16").style.display = "block";
                            document.getElementById("sentence16").classList.add("show");
                        }, 1000);
                    
                        setTimeout(() => {
                            document.getElementById("sentence17").style.display = "block";
                            document.getElementById("sentence17").classList.add("show");
                        }, 6000);
                        
                        setTimeout(() => {
                            document.getElementById("sentence20").style.display = "block";
                            document.getElementById("sentence20").classList.add("show");
                        }, 8000);
                    
                        setTimeout(() => {
                            document.getElementById("sentence21").style.display = "block";
                            document.getElementById("sentence21").classList.add("show");
                        }, 20000);
                    
                        setTimeout(() => {
                            document.getElementById("sentence22").style.display = "block";
                            document.getElementById("sentence22").classList.add("show");
                            document.getElementById("textbox").disabled = false;
                            document.getElementById("submitbutton").disabled = false;
                        }, 25000);
                    
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
                    
                    window.checkAnswer22 = function() {
                      var userInput = document.getElementById("textbox").value.trim();
                      var sentence22 = document.getElementById("sentence22");
                      var correctAnswer = "while";
                      var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
                    
                            if (userInput === correctAnswer) {
                                const endTime = Date.now();
                                const elapsedTime = (endTime - startTime) / 1000;
                                console.log(`Time taken: ${elapsedTime} seconds`);
                                newScore = score + 12; 
                                updateScore(newScore);
                                sentence22.innerHTML = "<span style='color: #FF7F3E;'> public class </span> <span style='color: #1679AB;'>KeepWalking</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>steps </span> = 10; <br><br>" +
                                    
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>do</span> {<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #1679AB;'>steps++;</span><br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Keep walking!'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; } <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #FF7F3E;'>(true)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Another room?'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; }<br>" +
                                    "}<br>"; 
                                    document.getElementById("textbox").disabled = true;
                                    document.getElementById("submitbutton").disabled = true;
                                
                                        setTimeout(() => {
                                            document.getElementById("sentence23").style.display = "block";
                                            document.getElementById("sentence23").classList.add("show");
                                        }, 2000);
                    
                                        setTimeout(() => {
                                            window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror6.html';
                                        }, 15000);
                                
                            } else {
                                sentence22.innerHTML = "<span style='color: #FF7F3E;'> public class </span> <span style='color: #1679AB;'>KeepWalking</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>steps </span> = 10; <br><br>" +
                                    
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>do</span> {<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #1679AB;'>steps++;</span><br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Keep walking!'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; } <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #FF7F3E;'>(true)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Another room?'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; }<br>" +
                                    "}<br>"; 
                            };
                        };
                    
                        console.log("Current Score:", score);
                        console.log("New Score:", newScore);  
                    
                    
                        window.updateSentence22 = function () {
                            var userInput = document.getElementById("textbox").value.trim();
                            var sentence22 = document.getElementById("sentence22");
                            sentence22.innerHTML = "<span style='color: #FF7F3E;'> public class </span> <span style='color: #1679AB;'>KeepWalking</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>steps </span> = 10; <br><br>" +
                                    
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>do</span> {<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #1679AB;'>steps++;</span><br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Keep walking!'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; } "+ userInput + " <span style='color: #FF7F3E;'>(true)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Another room?'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; }<br>" +
                                    "}<br>"; 
                        };
                                window.resetForm = function () {
                                    document.getElementById("answerForm").reset();
                                    sentence22.innerHTML = "<span style='color: #FF7F3E;'> public class </span> <span style='color: #1679AB;'>KeepWalking</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>public static void main(String[] args)</span> { <br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> int </span> <span style='color: #1679AB;'>steps </span> = 10; <br><br>" +
                                    
                                    "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>do</span> {<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #1679AB;'>steps++;</span><br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Keep walking!'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; } _____ <span style='color: #FF7F3E;'>(true)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Another room?'</span>)</span>;<br>" +
                                    "&nbsp; &nbsp; &nbsp; &nbsp; }<br>" +
                                    "}<br>"; 
                                    document.getElementById("textbox").disabled = false;
                                    document.getElementById("sentence23").style.display = "none";
                                    document.getElementById("sentence23").classList.remove("show");
                    
                                    score = 0;
                                    scoreElement.textContent = score;
                                };
                    
                                window.undoInput = function () {
                                    var textbox = document.getElementById("textbox");
                                    textbox.value = textbox.value.slice(0, -1);
                                    updateSentence22();
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
                    