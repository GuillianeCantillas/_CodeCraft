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

            const securityCamRef = doc(db, "SecurityCam", user.uid);

            await updateDoc(securityCamRef, {
                score3: score, 
            });

            console.log("Score updated in Security Cam for user:", user.uid);
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating score:", error);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('pixel-art-container4');
    const container6 = document.getElementById('pixel-art-container6');
    const container3 = document.getElementById('pixel-art-container3');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scoreElement = document.getElementById('score');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    let score = 0;
    let hintIndex = 0;
    const hints = [
    "Hint 1: Use to control loop execution..",
    "Hint 2: variable to store true or false.",
    "Hint 3: Any non-zero value is implicitly converted to true, and zero is converted to false."];

   function updateButtonPositions() { 
        const containerRect = container.getBoundingClientRect();
        
        button1.style.left = `${containerRect.left + -750}px`;
        button1.style.top = `${containerRect.top + -200}px`; //Reset

        button2.style.left = `${containerRect.left + -670}px`;
        button2.style.top = `${containerRect.top + -200}px`; //Undo

    }

    updateButtonPositions();
    window.addEventListener('resize', updateButtonPositions);
    window.addEventListener('scroll', updateButtonPositions);

    function updateButtonPositions6() { 
        const containerRect = container6.getBoundingClientRect();
        
        button3.style.left = `${containerRect.left + -470}px`;
        button3.style.top = `${containerRect.top + -200}px`; // Hint

        hinting.style.left = `${containerRect.left + -658}px`;
        hinting.style.top = `${containerRect.top + -210}px`; // Hints na talaguh

    }

    updateButtonPositions6();
    window.addEventListener('resize', updateButtonPositions6);
    window.addEventListener('scroll', updateButtonPositions6);

    function updateButtonPositions3() { 
        const containerRect = container3.getBoundingClientRect();
        
        scores.style.left = `${containerRect.left + -500}px`;
        scores.style.top = `${containerRect.top + -520}px`; // Score Board

    }

    updateButtonPositions3();
    window.addEventListener('resize', updateButtonPositions3);
    window.addEventListener('scroll', updateButtonPositions3);

    
    const frames = document.querySelectorAll(".pixel-art-frame");/*START container 1*/
    let currentFrameIndex = 0;
    const interval = 1800;

    function showNextFrame() {
        frames[currentFrameIndex].classList.remove("active");
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        frames[currentFrameIndex].classList.add("active");
    }

    function startAnimation() { 
        setInterval(showNextFrame, interval);
    }

    startAnimation();/*END container 1*/


            const frames2 = document.querySelectorAll(".pixel-art-frame2");/*START container 2*/
            let currentFrameIndex2 = 0;
            const interval2 = 2000;

            function showNextFrame2() {
                frames2[currentFrameIndex2].classList.remove("active");
                currentFrameIndex2 = (currentFrameIndex2 + 1) % frames2.length;
                frames2[currentFrameIndex2].classList.add("active");
            }

            function startAnimation2() { 
                setInterval(showNextFrame2, interval2);
            }

            startAnimation2();/*END container 2*/


                    const frames3 = document.querySelectorAll(".pixel-art-frame3");/*START container 3*/
                    let currentFrameIndex3 = 0;
                    const interval3 = 2500;

                    function showNextFrame3() {
                        frames3[currentFrameIndex3].classList.remove("active");
                        currentFrameIndex3 = (currentFrameIndex3 + 1) % frames3.length;
                        frames3[currentFrameIndex3].classList.add("active");
                    }

                    function startAnimation3() { 
                        setInterval(showNextFrame3, interval3);
                    }

                    startAnimation3();/*END container 3*/


                            const frames4 = document.querySelectorAll(".pixel-art-frame4");/*START container 4*/
                            let currentFrameIndex4 = 0;
                            const interval4 = 2800;

                            function showNextFrame4() {
                                frames4[currentFrameIndex4].classList.remove("active");
                                currentFrameIndex4 = (currentFrameIndex4 + 1) % frames4.length;
                                frames4[currentFrameIndex4].classList.add("active");
                            }

                            function startAnimation4() { 
                                setInterval(showNextFrame4, interval4);
                            }

                            startAnimation4(); /*END container 4*/


                                    const frames5 = document.querySelectorAll(".pixel-art-frame5");/*START container 5*/
                                    let currentFrameIndex5 = 0;
                                    const interval5 = 2300;

                                    function showNextFrame5() {
                                        frames5[currentFrameIndex5].classList.remove("active");
                                        currentFrameIndex5 = (currentFrameIndex5 + 1) % frames5.length;
                                        frames5[currentFrameIndex5].classList.add("active");
                                    }

                                    function startAnimation5() { 
                                        setInterval(showNextFrame5, interval5);
                                    }

                                    startAnimation5(); /*END container 5*/


                                            const frames6 = document.querySelectorAll(".pixel-art-frame6");/*START container 6*/
                                            let currentFrameIndex6 = 0;
                                            const interval6 = 1900;

                                            function showNextFrame6() {
                                                frames6[currentFrameIndex6].classList.remove("active");
                                                currentFrameIndex6 = (currentFrameIndex6 + 1) % frames6.length;
                                                frames6[currentFrameIndex6].classList.add("active");
                                            }

                                            function startAnimation6() { 
                                                setInterval(showNextFrame6, interval6);
                                            }

                                            startAnimation6(); /*END container 6*/

    setTimeout(() => {
                document.getElementById("sentence2").style.display = "block";
                document.getElementById("sentence2").classList.add("show");
            }, 5000);

     setTimeout(() => {
                document.getElementById("sentence3").style.display = "block";
                document.getElementById("sentence3").classList.add("show");
            }, 15000);
            
    setTimeout(() => {
                document.getElementById("sentence4").style.display = "block";
                document.getElementById("sentence4").classList.add("show");
                document.getElementById("textbox").disabled = false;
                document.getElementById("submitbutton").disabled = false;
                startChallenge();
            }, 20000);       

        window.checkAnswer4 = function () {
                const userInput = document.getElementById("textbox").value.trim().toLowerCase();
                        handleSubmission(userInput);
                    };
                
        
        function handleSubmission(userInput) {
            let endTime = new Date(); 
            let timeTakenMilliseconds = endTime - startTime; 
            let timeTakenInSeconds = Math.floor(timeTakenMilliseconds / 1000);
                    
        const correctAnswer = "true";
        const spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
        const sentence = document.getElementById("sentence4");

        if (userInput === correctAnswer) {
            sentence.innerHTML = "<span style='color: #FF7F3E;'>bool</span> <span style='color: #1679AB;'>isCodingFun</span> = <span class= '" + spanClass + "'>" + userInput + "</span>;<br><br></div>";

            document.getElementById("textbox").disabled = true;
            document.getElementById("submitbutton").disabled = true;

            showToast1();
            let score = Scoring(timeTakenInSeconds); 
            pauseTimer();

            setTimeout(() => {
                document.getElementById("sentence5").style.display = "block";
                document.getElementById("sentence5").classList.add("show");
            }, 1000);

             setTimeout(() => {
                window.location.href = "https://guillianecantillas.github.io/_CodeCraft/Anomaly/InGameAnomaly4.html";
            }, 9000);

            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    await saveUserData(user, score);
                } else {
                    console.log("No user is signed in.");
                }
            });

        } else {
                sentence.innerHTML = "<span style='color: #FF7F3E;'>bool</span> <span style='color: #1679AB;'>isCodingFun</span> = <span class= '" + spanClass + "'>" + userInput + "</span>;<br><br></div>";
            
            score - 2;
            scoreElement.textContent = score;
        }
    };

    window.updateSentence4 = function () {
        const userInput = document.getElementById("textbox").value.trim();
        const sentence = document.getElementById("sentence4");
        sentence.innerHTML = "<span style='color: #FF7F3E;'>bool</span> <span style='color: #1679AB;'>isCodingFun</span> = " + userInput + ";<br><br></div>";
     
    };

    window.resetForm = function () {
        document.getElementById("answerForm").reset();
        document.getElementById("sentence4").innerHTML = "<span style='color: #FF7F3E;'>bool</span> <span style='color: #1679AB;'>isCodingFun</span> = ____;<br><br></div>";
        document.getElementById("textbox").disabled = false;

        document.getElementById("sentence5").style.display = "none";
        document.getElementById("sentence6").style.display = "none";
        document.getElementById("sentence7").style.display = "none";
        document.getElementById("sentence5").classList.remove("show");
        document.getElementById("sentence6").classList.remove("show");
        document.getElementById("sentence7").classList.remove("show");

        // Reset the score to 0 when the form is reset
        score = 0;
        scoreElement.textContent = score;
    };

    window.undoInput = function () {
        const textbox = document.getElementById("textbox");
        textbox.value = textbox.value.slice(0, -1);
        updateSentence4();
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

/*function showToast() {
var toast = document.getElementById("toast");
toast.className = "toast show";
setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
}*/

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

