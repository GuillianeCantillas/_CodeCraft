import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const userName = userData.First_Name +  " " + userData.Initial + " " + userData.Last_Name;
                const yearLevel = userData['YearLevel'];
                const course = userData.Course;

                const hauntedAlgorithmsRef = doc(db, "HauntedAlgorithms", user.uid);
                await setDoc(hauntedAlgorithmsRef, {
                    userName: userName,
                    yearLevel: yearLevel,
                    course: course,
                }, { merge: true });

                const attemptsRef = collection(hauntedAlgorithmsRef, "attempts");
                const attemptsSnap = await getDocs(attemptsRef);
                const attemptsCount = attemptsSnap.size;

                const newAttemptId = (attemptsCount + 1).toString();
                const newAttemptRef = doc(attemptsRef, newAttemptId);
                await setDoc(newAttemptRef, {
                    score1: 0, 
                    score2: 0,
                    score3: 0,
                    score4: 0,
                    score5: 0,
                    score6: 0,
                    score7: 0,
                    score8: 0,
                    timeTaken: 0,
                    displayText: 0,
                    updatedAt: Timestamp.now()
                });

                console.log(`New attempt ${newAttemptId} added for user: ${user.uid}`);
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

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('pixel-art-container1');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scoreElement = document.getElementById('score');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    let score = 0;
    let hintIndex = 0;
    const hints = [
        "Hint 1: The method you are looking for starts with an 'o'.",
        "Hint 2: It's a common method used to initiate actions.",
        "Hint 3: It's often used to start programs or processes."
    ];

    function updateButtonPositions() {
        const containerRect = container.getBoundingClientRect();

        button1.style.left = `${containerRect.left - 60}px`;
        button1.style.top = `${containerRect.top + 310}px`; // Reset

        button2.style.left = `${containerRect.left + 20}px`;
        button2.style.top = `${containerRect.top + 310}px`; // Undo

        button3.style.left = `${containerRect.left + 760}px`;
        button3.style.top = `${containerRect.top + 310}px`; // Hint

        scores.style.left = `${containerRect.left + 740}px`;
        scores.style.top = `${containerRect.top - 255}px`; // Score Board

        hinting.style.left = `${containerRect.left + 710}px`;
        hinting.style.top = `${containerRect.top + 340}px`; // Hints
    }

    updateButtonPositions();
    window.addEventListener('resize', updateButtonPositions);
    window.addEventListener('scroll', updateButtonPositions);

    const frames = document.querySelectorAll(".pixel-art-frame");
    let currentFrameIndex = 0;
    const interval = 1000;

    const startLoopIndex = 10;
    const endLoopIndex = 18;

    function showNextFrame() {
        frames[currentFrameIndex].classList.remove("active");

        if (currentFrameIndex === endLoopIndex) {
            currentFrameIndex = startLoopIndex;
        } else {
            currentFrameIndex = (currentFrameIndex + 1) % frames.length;
        }

        frames[currentFrameIndex].classList.add("active");
    }

    function startAnimation() {
        setInterval(showNextFrame, interval);
    }

    startAnimation();

    setTimeout(() => {
        document.getElementById("sentence3").style.display = "block";
        document.getElementById("sentence3").classList.add("show");
    }, 5000);

    setTimeout(() => {
        document.getElementById("sentence4").style.display = "block";
        document.getElementById("sentence4").classList.add("show");
        document.getElementById("textbox").disabled = false;
        document.getElementById("submitbutton").disabled = false;
        startChallenge();
    }, 10000);

    window.checkAnswer4 = function () {
        const userInput = document.getElementById("textbox").value.trim().toLowerCase();
        handleSubmission(userInput);
    };

    function handleSubmission(userInput) {
        let endTime = new Date(); 
        let timeTakenMilliseconds = endTime - startTime; 
        let timeTakenInSeconds = Math.floor(timeTakenMilliseconds / 1000);
        
        const correctAnswer = "open"; 
        const dooropenAudio = document.getElementById('dooropen');
        const spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
        const sentence = document.getElementById("sentence4");
    
        if (userInput === correctAnswer) {
            sentence.innerHTML = `The door seems to be missing a small passcode, <br><br><br><br>
            <span style='color: #1679AB;'> passcode </span> = <span style='color: #FF7F3E;'> new </span> File (<span style='color: #A2C579;'>\"C:\\dungeon\\LargeSteelDoor.txt\"</span>);<br><br>
            &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> public void </span> <span class='${spanClass}'>${userInput}</span> (<span style='color: #1679AB;'>passcode</span>) <span style='color: #FF7F3E;'> throws </span> IOException <br><br>`;
            document.getElementById("textbox").disabled = true;
            document.getElementById("submitbutton").disabled = true;
            dooropenAudio.play();
    
            showToast();
            showToast1();
            let score = Scoring(timeTakenInSeconds); 
            pauseTimer();
    
            setTimeout(() => {
                document.getElementById("sentence5").style.display = "block";
                document.getElementById("sentence5").classList.add("show");
            }, 2000);
    
            setTimeout(() => {
                window.location.href = "https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror2.html";
            }, 9000);

        
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    await saveUserData(user, score);
                } else {
                    console.log("No user is signed in.");
                }
            });

        } else {
            sentence.innerHTML = `The door seems to be missing a small passcode, <br><br><br><br>
                <span style='color: #1679AB;'> passcode </span> = <span style='color: #FF7F3E;'> new </span> File (<span style='color: #A2C579;'>\"C:\\dungeon\\LargeSteelDoor.txt\"</span>);<br><br>
                &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> public void </span> <span class='${spanClass}'>${userInput}</span> (<span style='color: #1679AB;'>passcode</span>) <span style='color: #FF7F3E;'> throws </span> IOException <br><br>`;
    
            score -= 2; 
            scoreElement.textContent = score;
        }
    }

    window.updateSentence4 = function () {
        const userInput = document.getElementById("textbox").value.trim();
        const sentence = document.getElementById("sentence4");
        sentence.innerHTML = "The door seems to be missing a small passcode, <br><br><br><br>" +
            "<span style='color: #1679AB;'> passcode </span> = <span style='color: #FF7F3E;'> new </span> File (<span style='color: #A2C579;'>\"C:\\dungeon\\LargeSteelDoor.txt\"</span>);<br><br>" +
            "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> public void </span>" + userInput + " (passcode) <span style='color: #FF7F3E;'> throws </span> IOException <br><br>";
    };

    window.resetForm = function () {
        document.getElementById("answerForm").reset();
        document.getElementById("sentence4").innerHTML = "The door seems to be missing a small passcode, <br><br><br><br>" +
            "<span style='color: #1679AB;'> passcode </span> = <span style='color: #FF7F3E;'> new </span> File (<span style='color: #A2C579;'>\"C:\\dungeon\\LargeSteelDoor.txt\"</span>);<br><br>" +
            "&nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'> public void ________ (passcode) <span style='color: #FF7F3E;'> throws </span> IOException <br><br>";
        document.getElementById("textbox").disabled = false;

        document.getElementById("sentence5").style.display = "none";
        document.getElementById("sentence5").classList.remove("show");
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
        }
    }

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

            function showToast() {
                var toast = document.getElementById("toast");
                toast.className = "toast show";
                rewardnotif.play(); 
                setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
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
