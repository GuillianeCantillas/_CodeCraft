
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('pixel-art-container1');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scoreElement = document.getElementById('score');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    const mouseclickAudio = document.getElementById('mouseclick');
    const rewardnotifAudio = document.getElementById('rewardnotif');
    let score = 0;
    let hintIndex = 0;
    const hints = [
    "Hint 1: It is a variable.",
    "Hint 2: It stores the password required to access the folder.",
    "Hint 3: It is written in lowercase and initialized to tamarraw1928."];

    function updateButtonPositions() {
        const containerRect = container.getBoundingClientRect();
        
        button1.style.left = `${containerRect.left + -430}px`;
        button1.style.top = `${containerRect.top + 610}px`; //Reset

        button2.style.left = `${containerRect.left + -430}px`;
        button2.style.top = `${containerRect.top + 570}px`; //Undo

        button3.style.left = `${containerRect.left + 750}px`;
        button3.style.top = `${containerRect.top + 510}px`; // Hint

        scores.style.left = `${containerRect.left + -500}px`;
        scores.style.top = `${containerRect.top + 5}px`; // Score Board

        hinting.style.left = `${containerRect.left + 710}px`;
        hinting.style.top = `${containerRect.top + 340}px`; // Hints na talaguh
    }

    updateButtonPositions();
    window.addEventListener('resize', updateButtonPositions);
    window.addEventListener('scroll', updateButtonPositions);

let currentFrameIndex = 0;
let interval = 1000;
const frames2 = container.querySelectorAll(".pixel-art-frame");
let animationInterval;

function showNextFrame(frames) {
frames[currentFrameIndex].classList.remove("active");
currentFrameIndex = (currentFrameIndex + 1) % frames.length;
frames[currentFrameIndex].classList.add("active");

// Play mouseclick sound when img50 (level2_final15.png) appears
if (frames[currentFrameIndex].id === 'img50') {
    mouseclickAudio.play();
}

// Play mouseclick sound when img62 (level2_final26.png) appears
if (frames[currentFrameIndex].id === 'img62') {
    mouseclickAudio.play();
}

// Stop the animation when reaching the last frame
if (frames[currentFrameIndex].id === 'img81') {
    clearInterval(animationInterval);
}
}

function startAnimation(frames) {
currentFrameIndex = 0; // Reset index
frames[currentFrameIndex].classList.add("active");
animationInterval = setInterval(() => showNextFrame(frames), interval);
}

startAnimation(frames2); 


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
            }, 23000);  

    setTimeout(() => {
                document.getElementById("sentence5").style.display = "block";
                document.getElementById("sentence5").classList.add("show");
            }, 44000);     

    window.checkAnswer5 = function () {
        const userInput = document.getElementById("textbox").value.trim().toLowerCase();
        const correctAnswer = "correct_password";
        const spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
        const sentence = document.getElementById("sentence5");

        if (userInput === correctAnswer) {
            sentence.innerHTML = `However, when you try to open the file, it doesn't budge. It's locked tight, requiring a password to proceed. <br><br> import os<br>
    import getpass<br><br>
    correct_password = "tamarraw1928" <br><br>
    def check_password():<br><br>return getpass.getpass("Enter password to access the folder: ") == <span class='${spanClass}'>${userInput}</span> <br>def access_folder(folder_path): <br>
    if os.access(folder_path, os.R_OK): <br>
    for filename in os.listdir(folder_path): <br>
    print(filename)  <br><br>
    folder_path = "/path/to/locked/folder"  <br>
    if check_password(): <br>
    access_folder(folder_path) <br><br>`;
    document.getElementById("textbox").disabled = true;
    document.getElementById("submitbutton").disabled = true;

            score += 10;
            scoreElement.textContent = score;
            localStorage.setItem("score", score); // localStorage

            showToast();

            setTimeout(() => {
                document.getElementById("sentence6").style.display = "block";
                document.getElementById("sentence6").classList.add("show");
            }, 1000);

             setTimeout(() => {
                window.location.href = "https://guillianecantillas.github.io/CodeCraft/Mystery%20Files/IngameMystery2.html";
            }, 9000);
        } else {
            sentence.innerHTML = `However, when you try to open the file, it doesn't budge. It's locked tight, requiring a password to proceed. <br><br> import os<br>
    import getpass<br><br>
    correct_password = "tamarraw1928" <br><br>
    def check_password():<br><br>return getpass.getpass("Enter password to access the folder: ") == <span class='${spanClass}'>${userInput}</span> <br>def access_folder(folder_path): <br>
    if os.access(folder_path, os.R_OK): <br>
    for filename in os.listdir(folder_path): <br>
    print(filename)  <br><br>
    folder_path = "/path/to/locked/folder"  <br>
    if check_password(): <br>
    access_folder(folder_path) <br><br>`;
            score - 2;
            scoreElement.textContent = score;
        }
    };

    window.updateSentence5 = function () {
        const userInput = document.getElementById("textbox").value.trim();
        const sentence = document.getElementById("sentence5");
        sentence.innerHTML = `However, when you try to open the file, it doesn't budge. It's locked tight, requiring a password to proceed. <br><br> import os<br>
    import getpass<br><br>
    correct_password = "tamarraw1928" <br><br>
    def check_password():<br><br>return getpass.getpass("Enter password to access the folder: ") == ${userInput}<br> def access_folder(folder_path): <br>
    if os.access(folder_path, os.R_OK): <br>
    for filename in os.listdir(folder_path): <br>
    print(filename)  <br><br>
    folder_path = "/path/to/locked/folder"  <br>
    if check_password(): <br>
    access_folder(folder_path) <br><br>`;
    };

    window.resetForm = function () {
        document.getElementById("answerForm").reset();
        document.getElementById("sentence5").innerHTML = `However, when you try to open the file, it doesn't budge. It's locked tight, requiring a password to proceed.<br><br>
    import os<br>
    import getpass<br><br>
    correct_password = "tamarraw1928" <br><br>
    def check_password():<br>
    return getpass.getpass("Enter password to access the folder: ") == _____________ <br>
    def access_folder(folder_path): <br>
    if os.access(folder_path, os.R_OK): <br>
    for filename in os.listdir(folder_path): <br>
    print(filename)  <br><br>
    folder_path = "/path/to/locked/folder"  <br>
    if check_password(): <br>
    access_folder(folder_path) <br>`;

        document.getElementById("textbox").disabled = false;
        document.getElementById("sentence6").style.display = "none";
        document.getElementById("sentence6").classList.remove("show");
        // Reset the score to 0 when the form is reset
        score = 0;
        scoreElement.textContent = score;
    };

    window.undoInput = function () {
        const textbox = document.getElementById("textbox");
        textbox.value = textbox.value.slice(0, -1);
        updateSentence5();
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
rewardnotifAudio.play(); // Play reward notification sound
setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
}
});
