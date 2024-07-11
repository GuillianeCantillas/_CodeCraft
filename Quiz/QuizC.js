import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

const cppDocRef = doc(collection(db, "Questions"), "C++");

const questionsData = [
    {
        question: "What is the correct syntax for including the standard input/output library in C++?",
        choices: [
            "#include <iostream>",
            "#include <stdio.h>",
            "#include <stdlib.h>",
            "#include <io>"
        ],
        correctAnswer: "#include <iostream>"
    },
    {
        question: "Which of the following is a correct way to declare a variable in C++?",
        choices: [
            "int num = 5;",
            "int num := 5;",
            "int num <- 5;",
            "int num << 5;"
        ],
        correctAnswer: "int num = 5;"
    },
    {
        question: "Which of the following is used to start the main function in C++?",
        choices: [
            "int main() {}",
            "void main() {}",
            "main() {}",
            "start main() {}"
        ],
        correctAnswer: "int main() {}"
    },
    {
        question: "What will be the output of the following code?<br>" +
        "int x = 10;<br>" +
        "if (x > 5) {<br>" +
        "&nbsp &nbsp std::cout << &quot;Hello&quot;;<br>" +
        "} else {<br>" +
        "&nbsp &nbsp std::cout << &quot;Goodbye&quot;;<br>" +
        "}<br>",
        choices: [
            "Hello",
            "Goodbye",
            "Error",
            "Nothing"
        ],
        correctAnswer: "Hello"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        choices: [
            "for loop",
            "while loop",
            "do-while loop",
            "None of the above"
        ],
        correctAnswer: "do-while loop"
    },
    {
        question: "What is the correct way to declare a function that returns an integer and takes two integers as parameters?",
        choices: [
            "int function(int a, int b);",
            "int function(a int, b int);",
            "int function(int a, b int);",
            "int function(int a, b int);"
        ],
        correctAnswer: "int function(int a, int b);"
    },
    {
        question: "Which of the following statements correctly calls a function void display(int a)?",
        choices: [
            "display(int a);",
            "display(a);",
            "display(5);",
            "void display(5);"
        ],
        correctAnswer: "display(5);"
    },
    {
        question: "Which of the following keywords is used to create an object of a class in C++?",
        choices: [
            "class",
            "new",
            "object",
            "Instance"
        ],
        correctAnswer: "new"
    },
    {
        question: "What is the default access specifier for members of a class in C++?",
        choices: [
            "public",
            "protected",
            "private",
            "static"
        ],
        correctAnswer: "private"
    },
    {
        question: "What does the following code do?" + 
        "int *ptr = new int;",
        choices: [
            "Declares an integer variable named ptr",
            "Declares a pointer to an integer and allocates memory for it",
            "Declares an integer array of size ptr",
            "Declares a pointer to a constant integer"
        ],
        correctAnswer: "Declares a pointer to an integer and allocates memory for it"
    }
];

setDoc(cppDocRef, { questions: questionsData }, { merge: true })
    .then(() => {
        console.log("Questions added to the C++ document!");
    })
    .catch((error) => {
        console.error("Error adding questions: ", error);
    });

    async function fetchQuestions() {
        const cppDocRef = doc(collection(db, "Questions"), "C++");
        const docSnapshot = await getDoc(cppDocRef);
        if (docSnapshot.exists()) {
            return docSnapshot.data().questions;
        } else {
            console.error("No such document!");
            return [];
        }
    }

    function randomizeArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function displayQuestions(questions) {
        const quizContainer = document.getElementById('textbox');
        quizContainer.innerHTML = ''; // Clear previous content
        questions.forEach((questionObj, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <p>${questionObj.question}</p>
                <ul class="choices">
                    ${questionObj.choices.map((choice, i) => `
                        <li>
                            <input type="radio" id="q${index}c${i}" name="q${index}" value="${choice}">
                            <label for="q${index}c${i}">${choice}</label>
                        </li>
                    `).join('')}
                </ul>
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    function getSelectedAnswers(questions) {
        return questions.map((questionObj, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            return {
                question: questionObj.question,
                selectedAnswer: selectedOption ? selectedOption.value : null,
                correctAnswer: questionObj.correctAnswer
            };
        });
    }

    function gradeQuiz(answers) {
        let score = 0;
        answers.forEach(answer => {
            if (answer.selectedAnswer === answer.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    async function initQuiz() {
        const questions = await fetchQuestions();
        const randomizedQuestions = randomizeArray(questions);
        displayQuestions(randomizedQuestions);

        const submitBtn = document.getElementById('submit-btn');
        submitBtn.addEventListener('click', () => {
            const answers = getSelectedAnswers(randomizedQuestions);
            const score = gradeQuiz(answers);
            alert(`Your score is: ${score}/${randomizedQuestions.length}`);
        });
    }

    initQuiz().catch(console.error);