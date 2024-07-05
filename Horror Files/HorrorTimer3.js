document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("textbox").disabled = true;
    document.getElementById("submitbutton").disabled = true;

    const container = document.getElementById('pixel-art-container3');
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const scores = document.getElementById('score-container');
    const hinting = document.getElementById('hintBox');
    let hintIndex = 0;
    const hints = [
        "Hint 1: This will skip the current iteration and move to the next iteration of the loop.",
        "Hint 2: Use this to avoid executing certain code within the loop for specific conditions.",
        "Hint 3: Bypasses the remaining statements in the loop body and jumps to the next iteration."
    ];

    let startTime = Date.now();

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

    let currentFrameIndex = 0;
    let interval = 1000;
    const frames3 = document.querySelectorAll(".pixel-art-frame");
    let animationInterval;
    const metaldooropenAudio = document.getElementById("metaldooropen"); // Get the audio element

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
    }, 15000);

    const scoreElement = document.getElementById('score');

    function getScore() {
        const score = localStorage.getItem("score");
        return score ? parseInt(score, 10) : 0;
    }

    function updateScore(newScore) {
        localStorage.setItem("score", newScore);
        scoreElement.textContent = newScore;
    }

    let score = getScore();
    scoreElement.textContent = score;

    let newScore = getScore();

    window.checkAnswer12 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence12 = document.getElementById("sentence12");
        var correctAnswer = "continue";
        var spanClass = userInput === correctAnswer ? 'correct' : 'incorrect';
        if (userInput === correctAnswer) {
            const endTime = Date.now();
            const elapsedTime = (endTime - startTime) / 1000;
            console.log(`Time taken: ${elapsedTime} seconds`);
            newScore = score + 11;
            updateScore(newScore);
            sentence12.innerHTML = `If you wish to continue to find answers then, <br><br>
                <span style='color: #FF7F3E;'>for (;;)</span> { <br>
                    &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>
                    &nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>
                    &nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>
                &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='${spanClass}'>${userInput}</span> <span style='color: #FF7F3E;'>;</span> <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>
                    &nbsp; &nbsp;    } <br>
                }; <br><br></div>`;
            document.getElementById("textbox").disabled = true;
            document.getElementById("submitbutton").disabled = true;
            displayRemainingFrames();

            setTimeout(() => {
                document.getElementById("sentence14").style.display = "block";
                document.getElementById("sentence14").classList.add("show");
                metaldooropenAudio.play(); // Play audio after sentence14 appears

            }, 2000);

            setTimeout(() => {
                displayRemainingFrames();

            }, 8000);

            setTimeout(() => {
                window.location.href = "https://guillianecantillas.github.io/_CodeCraft/Horror%20Files/IngameHorror5.html";
            }, 10000);

        } else {
            sentence12.innerHTML = `If you wish to continue to find answers then, <br><br>
                <span style='color: #FF7F3E;'>for (;;)</span> { <br>
                    &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>
                    &nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>
                    &nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>
                &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class='${spanClass}'>${userInput}</span> <span style='color: #FF7F3E;'>;</span> <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>
                    &nbsp; &nbsp;    } <br>
                }; <br><br></div>`;
        }
    };

    console.log("Current Score:", score);
    console.log("New Score:", newScore);

    window.updateSentence12 = function () {
        var userInput = document.getElementById("textbox").value.trim();
        var sentence12 = document.getElementById("sentence12");
        sentence12.innerHTML = `If you wish to continue to find answers then, <br><br>
            <span style='color: #FF7F3E;'>for (;;)</span> { <br>
                &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>
                &nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>
                &nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>
            &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${userInput} <span style='color: #FF7F3E;'>;</span> <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>
                &nbsp; &nbsp;    } <br>
            }; <br><br></div>`;
    };

    window.resetForm = function () {
        document.getElementById("answerForm").reset();
        sentence12.innerHTML = `If you wish to continue to find answers then, <br><br>
            <span style='color: #FF7F3E;'>for (;;)</span> { <br>
                &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Do you want to continue?<br>
                &nbsp; &nbsp; (Yes or No: )'</span>);</span> <br>
                &nbsp; &nbsp; <span style='color: #1679AB;'>yourAnswer</span> <span style='color: #FF7F3E;'>= scanner.nextLine().trim();</span> <br><br>
            &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'Yes'</span>))</span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'Well, go on then!'</span>);</span> <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ______ <span style='color: #FF7F3E;'>;</span> <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'>else if (<span style='color: #1679AB;'>yourAnswer</span>.equalsIgnoreCase(<span style='color: #A2C579;'>'No'</span>))</span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'I'm sorry to hear that.'</span>);</span><br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>break;</span><br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    } <span style='color: #FF7F3E;'> else </span> { <br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #FF7F3E;'>System.out.println(<span style='color: #A2C579;'>'What would you like to do?'</span>);</span> <br>
                &nbsp; &nbsp;    } <br>
            }; <br><br></div>`;
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
        }
    };
});
