import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

const cppDocRef = doc(collection(db, "Questions"), "Java");

const questionsData = [
{
    question: "What is the correct way to declare a variable in Java?",
    choices: [
        "int number = 5;",
        "number int = 5;",
        "5 = int number;",
        "declare int number = 5;"
    ],
    correctAnswer: "int number = 5;"
},
{
    question: "Which of the following is a valid Java method declaration?",
    choices: [
        "public void myMethod() {}",
        "method myMethod() {}",
        "void myMethod() {}",
        "function myMethod() {}"
    ],
    correctAnswer: "public void myMethod() {}"
},
{
    question: "What is the output of the following code?"+
    "System.out.println(10 + 20);",

    choices: [
        "30",
        "1020",
        "10 20",
        "Error"
    ],
    correctAnswer: "30",
},
{
    question: "Which of the following is not a primitive data type in Java?",
    choices: [
        "ClassName objectName = new ClassName();",
        "objectName = ClassName();",
        "ClassName objectName = ClassName();",
        "objectName = new ClassName;"
    ],
    correctAnswer: "ClassName objectName = new ClassName();",
},
{
    question: "hich keyword is used to inherit a class in Java?",
    choices: [
        "implements",
        "inherits",
        "extends",
        "uses"
    ],
    correctAnswer: "extends",
},
{
    question: "What is the default value of an instance variable of type int in Java?",
    choices: [
        "0",
        "null",
        "undefined",
        "-1"
    ],
    correctAnswer: "0",
},
{
    question: "hich of the following statements is used to handle exceptions in Java?",
    choices: [
        "try-catch",
        "if-else",
        "for-while",
        "throw"
    ],
    correctAnswer: "try-catch",
},
{
    question: "Which of the following is not a primitive data type in Java?",
    choices: [
        "int",
        "boolean",
        "String",
        "char",
    ],
    correctAnswer: "String",
},
{
    question: "Which method must be defined in a Java class to make it executable?",
    choices: [
        "main()",
        "start()",
        "run()",
        "execute()",
    ],
    correctAnswer: "main()",
},
{
    question: "What is the purpose of the static keyword in Java?",

    choices: [
        "To create instance variables",
        "To make a method belong to the class rather than instances of the class",
        "To define a constant variable",
        "To create a new class"
    ],
    correctAnswer: "To make a method belong to the class rather than instances of the class"
},
{
    question: "What will be the output of the following code?"+
    "int x = 5;"+
    "System.out.println(x++);",

    choices: [
        "4",
        "5",
        "6.",
        "Error"
    ],
    correctAnswer: "5"
},
{
    question: "Which access modifier makes a member visible to all classes regardless of the package?",

    choices: [
        "private",
        "protected",
        "public",
        "default"
    ],
    correctAnswer: "public"
},
{
    question: "How can you achieve multiple inheritance in Java?",

    choices: [
        "Using extends keyword",
        "Using implements keyword",
        "Using both extends and implements keywords",
        "Multiple inheritance is not supported in Java"
    ],
    correctAnswer: "Using implements keyword"
},
{
    question: "Which of the following statements is true about interfaces in Java?",


    choices: [
        "Interfaces can contain method implementations",
        "A class can implement multiple interfaces",
        "Interfaces can have instance variables",
        "Interfaces can be instantiated"
    ],
    correctAnswer: "A class can implement multiple interfaces"
},
{
    question: "What is the correct way to declare a constant in Java?",

    choices: [
        "static final int MAX_VALUE = 100;",
        "final static int MAX_VALUE = 100;",
        "int MAX_VALUE = 100;",
        "Both a and b"
    ],
    correctAnswer: "Both a and b"
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