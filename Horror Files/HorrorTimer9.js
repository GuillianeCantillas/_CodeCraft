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
    const container = document.getElementById('pixel-art-container9');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    let hintIndex = 0;
    const hints = [
            "Hint 1: This is immutable, meaning once you create an instance, you cannot modify its state.",
            "Hint 2:  You can access individual components of this instance such as year, month, and day.",
            "Hint 3: is a class in the Java java.time package that represents a date without a time component."];

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
            const frames8 = document.querySelectorAll(".pixel-art-frame");
            let animationInterval;
            
            function showNextFrame(frames) {
                frames[currentFrameIndex].classList.remove("active");
                
                if (frames[currentFrameIndex].id === 'img94') {
                    clearInterval(animationInterval); 
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
                        ...frames8, 
                        document.getElementById("img95"),
                        document.getElementById("img96"),
                        document.getElementById("img97"),
                        document.getElementById("img98"),
                        document.getElementById("img99"),
                    ];
                
                    let remainingIndex = 0;
                    const remainingInterval = 1000;
                
                    function showNextRemainingFrame() {
                        remainingFrames[remainingIndex].classList.remove("active");
                        remainingIndex++;
                        
                        if (remainingIndex < remainingFrames.length) {
                            remainingFrames[remainingIndex].classList.add("active");
                            if (remainingFrames[remainingIndex].id === 'img99') {
                                clearInterval(remainingAnimationInterval);
                            }
                        }
                    }
                
                    remainingFrames[0].classList.add("active");
                    const remainingAnimationInterval = setInterval(showNextRemainingFrame, remainingInterval);
                }
    setTimeout(() => {
        startAnimation(frames8);
    }, 0);

    setTimeout(() => {
        document.getElementById("sentence49").style.display = "block";
        document.getElementById("sentence49").classList.add("show");
        showToast();
    }, 0);

    setTimeout(() => {
        document.getElementById("sentence50").style.display = "block";
        document.getElementById("sentence50").classList.add("show");
    }, 3000);

    setTimeout(() => {
        document.getElementById("sentence53").style.display = "block";
        document.getElementById("sentence53").classList.add("show");
    }, 10000);

    setTimeout(() => {
        document.getElementById("sentence54").style.display = "block";
        document.getElementById("sentence54").classList.add("show");
        document.getElementById("textbox").disabled = false;
        document.getElementById("submitbutton").disabled = false;
    }, 15000);

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

window.checkAnswer54 = function() {
  var userInput = document.getElementById("textbox").value.trim();
  var sentence54 = document.getElementById("sentence54");
  var correctAnswer = "LocalDate";
  var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';

        if (userInput === correctAnswer) {
            newScore = score + 12; 
            updateScore(newScore);
            sentence54.innerHTML = 
        "<span style='color: #FF7F3E;'>import java.time.LocalDate;</span> <br><br><br>" +
        
        "<span style='color: #FF7F3E;'>public class</span>  <span style='color: #1679AB;'>wine</span> {<br>" +
        "&nbsp; &nbsp;   <span style='color: #FF7F3E;'>public static void main(String[] args)</span> {<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #1679AB;'>date1040</span> =" + "<span class='" + spanClass + "'> " + userInput + "</span>.<span style='color: #FF7F3E;'>of</span>(<span style='color: #1679AB;'>1040, 1, 1</span>);<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp;    <span style='color: #FF7F3E;'>System.out.println</span>(<span style='color: #A2C579;'>'The code for the door is'</span> +  <span style='color: #1679AB;'>date1040</span>);<br>" +
        "&nbsp; &nbsp;    }<br>" + 
        "};";
        document.getElementById("textbox").disabled = true;
        document.getElementById("submitbutton").disabled = true;
        displayRemainingFrames();
            
                    setTimeout(() => {
                        document.getElementById("sentence55").style.display = "block";
                        document.getElementById("sentence55").classList.add("show");
                    }, 2000);

                    setTimeout(() => {
                        window.location.href = 'https://guillianecantillas.github.io/CodeCraft/IngameHorror10.html';
                    }, 25000);
            
        } else {
            sentence54.innerHTML =
        "<span style='color: #FF7F3E;'>import java.time.LocalDate;</span> <br><br><br>" +
        
        "<span style='color: #FF7F3E;'>public class</span>  <span style='color: #1679AB;'>wine</span> {<br>" +
        "&nbsp; &nbsp;   <span style='color: #FF7F3E;'>public static void main(String[] args)</span> {<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp; <span class='" + spanClass + "'>" + userInput + "</span> <span style='color: #1679AB;'>date1040</span> =" + "<span class='" + spanClass + "'> " + userInput + "</span>.<span style='color: #FF7F3E;'>of</span>(<span style='color: #1679AB;'>1040, 1, 1</span>);<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp;    <span style='color: #FF7F3E;'>System.out.println</span>(<span style='color: #A2C579;'>'The code for the door is'</span> +  <span style='color: #1679AB;'>date1040</span>);<br>" +
        "&nbsp; &nbsp;    }<br>" + 
        "};";
        };
    };

    console.log("Current Score:", score);
    console.log("New Score:", newScore);  


    window.updateSentence54 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence54 = document.getElementById("sentence54");
        sentence54.innerHTML = 
        "<span style='color: #FF7F3E;'>import java.time.LocalDate;</span> <br><br><br>" +
        
        "<span style='color: #FF7F3E;'>public class</span>  <span style='color: #1679AB;'>wine</span> {<br>" +
        "&nbsp; &nbsp;   <span style='color: #FF7F3E;'>public static void main(String[] args)</span> {<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp;" + userInput + " <span style='color: #1679AB;'>date1040</span> = " + userInput + ".<span style='color: #FF7F3E;'>of</span>(<span style='color: #1679AB;'>1040, 1, 1</span>);<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp;    <span style='color: #FF7F3E;'>System.out.println</span>(<span style='color: #A2C579;'>'The code for the door is'</span> +  <span style='color: #1679AB;'>date1040</span>);<br>" +
        "&nbsp; &nbsp;    }<br>" + 
        "};";
    };
            window.resetForm = function () {
                document.getElementById("answerForm").reset();
                sentence54.innerHTML =  
        "<span style='color: #FF7F3E;'>import java.time.LocalDate;</span> <br><br><br>" +
        
        "<span style='color: #FF7F3E;'>public class</span>  <span style='color: #1679AB;'>wine</span> {<br>" +
        "&nbsp; &nbsp;   <span style='color: #FF7F3E;'>public static void main(String[] args)</span> {<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp; _________<span style='color: #1679AB;'>date1040</span> = _________.<span style='color: #FF7F3E;'>of</span>(<span style='color: #1679AB;'>1040, 1, 1</span>);<br>" +
        "&nbsp; &nbsp; &nbsp; &nbsp;    <span style='color: #FF7F3E;'>System.out.println</span>(<span style='color: #A2C579;'>'The code for the door is'</span> +  <span style='color: #1679AB;'>date1040</span>);<br>" +
        "&nbsp; &nbsp;    }<br>" + 
        "};";
                document.getElementById("textbox").disabled = false;
                document.getElementById("sentence55").style.display = "none";
                document.getElementById("sentence55").classList.remove("show");

                score = 0;
                scoreElement.textContent = score;
            };

            window.undoInput = function () {
                var textbox = document.getElementById("textbox");
                textbox.value = textbox.value.slice(0, -1);
                updateSentence54();
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

    function showToast() {
    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
}
        });
