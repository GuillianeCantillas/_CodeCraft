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
                score4: score, 
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
                        const container = document.getElementById('pixel-art-container5');
                        const allImages = container.querySelectorAll('.pixel-art-frame');
                        const img33 = document.getElementById('img33');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scoreElement = document.getElementById('score');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        const answerForm = document.getElementById('answerForm');
                        let hintIndex = 0;
                        const hints = [
                            "Hint 1: This statement performs an action until a certain criteria is false.",
                            "Hint 2: Use this to avoid executing certain code within the loop for specific conditions.",
                            "Hint 3: Bypasses the remaining statements in the loop body and jumps to the next iteration."];

                        
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
                                    lightningstrikeAudio.play();

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
                        const lightningstrikeAudio = document.getElementById("lightningstrike"); // Get the audio element

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
                            startChallenge();
                        }, 25000);
                    
                    window.checkAnswer22 = function () {
                            const userInput = document.getElementById("textbox").value.trim().toLowerCase();
                            handleSubmission(userInput);
                            };
                        
                    function handleSubmission(userInput) {
                    let endTime = new Date(); 
                    let timeTakenMilliseconds = endTime - startTime; 
                    let timeTakenInSeconds = Math.floor(timeTakenMilliseconds / 1000);
                      var sentence22 = document.getElementById("sentence22");
                      var correctAnswer = "while";
                      var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
                    
                            if (userInput === correctAnswer) {
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
                                    showToast1();
                                    let score = Scoring(timeTakenInSeconds);
                                    pauseTimer();
                                
                                
                                        setTimeout(() => {
                                            document.getElementById("sentence23").style.display = "block";
                                            document.getElementById("sentence23").classList.add("show");
                                        }, 2000);
                    
                                        setTimeout(() => {
                                            window.location.href = 'https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror6.html';
                                        }, 15000);

                                        onAuthStateChanged(auth, async (user) => {
                                            if (user) {
                                                await saveUserData(user, score);
                                            } else {
                                                console.log("No user is signed in.");
                                            }
                                        });
                                
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
            
                    