import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, collection, updateDoc, Timestamp, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

            const hauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);
            const attemptsRef = collection(hauntedAlgorithmsRef, "attempts");

            const q = query(attemptsRef, orderBy("updatedAt", "desc"), limit(1));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const latestAttemptDoc = querySnapshot.docs[0];
                const latestAttemptRef = doc(db, latestAttemptDoc.ref.path);

                await updateDoc(latestAttemptRef, {
                    score3: score,
                    updatedAt: Timestamp.now()
                });

                console.log(`Score3 updated in latest attempt for user: ${user.uid}`);
            } else {
                console.log("No attempts found for user.");
            }
        } else {
            console.log("User document does not exist.");
        }
    } catch (error) {
        console.error("Error updating attempt: ", error);
    }
}

                    document.addEventListener("DOMContentLoaded", function () {
                        document.getElementById("textbox").disabled = true;
                        document.getElementById("submitbutton").disabled = true;
                        const container = document.getElementById('pixel-art-container3');
                        const button1 = document.querySelector('.button1');
                        const button2 = document.querySelector('.button2');
                        const button3 = document.querySelector('.button3');
                        const scoreElement = document.getElementById('score');
                        const scores = document.getElementById('score-container');
                        const hinting = document.getElementById('hintBox');
                        let hintIndex = 0;
                        const hints = [
                            "Hint 1: This will skip the current iteration and move to the next iteration of the loop.",
                            "Hint 2: Use this to avoid executing certain code within the loop for specific conditions.",
                            "Hint 3: Bypasses the remaining statements in the loop body and jumps to the next iteration."];

                        
                            function updateButtonPositions() {
                                const containerRect = container.getBoundingClientRect();
                                
                                button1.style.left = `${containerRect.left + -60}px`;
                                button1.style.top = `${containerRect.top + 310}px`; //Reset
                
                                button2.style.left = `${containerRect.left + 20}px`;
                                button2.style.top = `${containerRect.top + 310}px`; //Undo
                
                                button3.style.left = `${containerRect.left + 760}px`;
                                button3.style.top = `${containerRect.top + 310}px`; // Hint
                
                                scores.style.left = `${containerRect.left + 740}px`;
                                scores.style.top = `${containerRect.top + -255}px`; // Score Board
                
                                hinting.style.left = `${containerRect.left + 710}px`;
                                hinting.style.top = `${containerRect.top + 340}px`; // Hints na talaguh
                            }
                
                            updateButtonPositions();
                            window.addEventListener('resize', updateButtonPositions);
                            window.addEventListener('scroll', updateButtonPositions);
                
                
                            let currentFrameIndex = 0;
                            let interval = 1000;
                            const frames3 = document.querySelectorAll(".pixel-art-frame");
                            let animationInterval;
                            
                            function showNextFrame(frames) {
                                frames[currentFrameIndex].classList.remove("active");
                                
                                if (frames[currentFrameIndex].id === 'img25') {
                                    currentFrameIndex = frames[currentFrameIndex + 1].id === 'img26' ? currentFrameIndex + 1 : currentFrameIndex;
                                } else if (frames[currentFrameIndex].id === 'img26') {
                                    currentFrameIndex = frames[currentFrameIndex - 1].id === 'img25' ? currentFrameIndex - 1 : currentFrameIndex;
                                } else {
                                    currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                                }
                                
                                frames[currentFrameIndex].classList.add("active");
                            }
                            
                            function startAnimation(frames) {
                                currentFrameIndex = 0; // Reset index
                                frames[currentFrameIndex].classList.add("active");
                                animationInterval = setInterval(() => showNextFrame(frames), interval);
                            }
                            
                            function displayRemainingFrames() {
                                clearInterval(animationInterval);
                            
                                const remainingFrames = [
                                    ...frames3, 
                                    document.getElementById("img27"),
                                    document.getElementById("img28"),
                                ];
                            
                                let remainingIndex = 0;
                                const remainingInterval = 1000;
                            
                                function showNextRemainingFrame() {
                                    remainingFrames[remainingIndex].classList.remove("active");
                                    remainingIndex++;
                            
                                    if (remainingIndex < remainingFrames.length) {
                                        remainingFrames[remainingIndex].classList.add("active");
                                        if (remainingFrames[remainingIndex].id === 'img28') {
                                            clearInterval(remainingAnimationInterval);
                                        }
                                    }
                                }
                            
                                remainingFrames[0].classList.add("active");
                                const remainingAnimationInterval = setInterval(showNextRemainingFrame, remainingInterval);
                            }
                            
                          
                setTimeout(() => {
                                startAnimation(frames3); 
                            }, 1000);
                            
               setTimeout(() => {
                            document.getElementById("sentence10").style.display = "block";
                            document.getElementById("sentence10").classList.add("show");
                          }, 1000); 
            
                setTimeout(() => {
                          document.getElementById("sentence11").style.display = "block";
                          document.getElementById("sentence11").classList.add("show");
                          }, 8000); 
            
                setTimeout(() => {
                          document.getElementById("sentence12").style.display = "block";
                          document.getElementById("sentence12").classList.add("show");
                          document.getElementById("textbox").disabled = false;
                        document.getElementById("submitbutton").disabled = false;
                        startChallenge();
                          }, 15000); 

                window.checkAnswer12 = function () {
                    const userInput = document.getElementById("textbox").value.trim().toLowerCase();
                    handleSubmission(userInput);
                    };
                
            function handleSubmission(userInput) {
            let endTime = new Date(); 
            let timeTakenMilliseconds = endTime - startTime; 
            let timeTakenInSeconds = Math.floor(timeTakenMilliseconds / 1000);
              var sentence12 = document.getElementById("sentence12");
              var correctAnswer = "continue";
              var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
            
                    if (userInput === correctAnswer) {
                        sentence12.innerHTML = "If you wish to continue to find answers then, <br><br>" +
                            "<span style='color: #FF7F3E;'>for (;;)</span> { <br>" +
                                "&nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>" +
                                "&nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>" +
                                "&nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>" +
                                "&nbsp; &nbsp;    } <br>" +
                            "}; <br><br></div>";
                            document.getElementById("textbox").disabled = true;
                            document.getElementById("submitbutton").disabled = true;
                            displayRemainingFrames();
                            showToast1();
                            let score = Scoring(timeTakenInSeconds);
                            pauseTimer();
                        
                        setTimeout(() => {
                            document.getElementById("sentence14").style.display = "block";
                            document.getElementById("sentence14").classList.add("show");
                          }, 2000);
            
                          setTimeout(() => {
                            displayRemainingFrames();
                          }, 8000);

                        setTimeout(() => {
                            window.location.href = "https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror5.html";
                        }, 10000);

                        onAuthStateChanged(auth, async (user) => {
                            if (user) {
                                await saveUserData(user, score);
                            } else {
                                console.log("No user is signed in.");
                            }
                        });
                        
                    } else {
                        sentence12.innerHTML = "If you wish to continue to find answers then, <br><br>" +
                            "<span style='color: #FF7F3E;'>for (;;)</span> { <br>" +
                                "&nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>" +
                                "&nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>" +
                                "&nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>" +
                                "&nbsp; &nbsp;    } <br>" +
                            "}; <br><br></div>";
                    };
                };
             
            
                window.updateSentence12 = function () {
                    var userInput = document.getElementById("textbox").value.trim();
                    var sentence12 = document.getElementById("sentence12");
                    sentence12.innerHTML = "If you wish to continue to find answers then, <br><br>" +
                            "<span style='color: #FF7F3E;'>for (;;)</span> { <br>" +
                                "&nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>" +
                                "&nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>" +
                                "&nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + userInput + "<span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>" +
                                "&nbsp; &nbsp;    } <br>" +
                            "}; <br><br></div>";
                };
                        window.resetForm = function () {
                            document.getElementById("answerForm").reset();
                            sentence12.innerHTML = "If you wish to continue to find answers then, <br><br>" +
                            "<span style='color: #FF7F3E;'>for (;;)</span> { <br>" +
                                "&nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>" +
                                "&nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>" +
                                "&nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ________ <span style='color: #FF7F3E;'>;</span> <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>" +
                                "&nbsp; &nbsp;    } <br>" +
                            "}; <br><br></div>";
                            document.getElementById("textbox").disabled = false;
                            document.getElementById("sentence14").style.display = "none";
                            document.getElementById("sentence14").classList.remove("show");
            
                            score = 0;
                            scoreElement.textContent = score;
                        };
            
                        window.undoInput = function () {
                            var textbox = document.getElementById("textbox");
                            textbox.value = textbox.value.slice(0, -1);
                            updateSentence12();
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
