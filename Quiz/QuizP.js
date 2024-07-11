import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

const cppDocRef = doc(collection(db, "Questions"), "Python");

const questionsData = [
{
    question: "What is the correct syntax to output &quot;Hello, World&quot;; in Python?",
    choices: [
        "echo &quot;Hello, World&quot;",
        "print(&quot;Hello, World&quot;)",
        "printf(&quot;Hello, World&quot;)",
        "System.out.println(&quot;Hello, World&quot;)"
    ],
    correctAnswer: "print(&quot;Hello, World&quot;)"
},
{
    question: "Which of the following data types is immutable in Python?",
    choices: [
        "List",
        "Dictionary",
        "Set",
        "Tuple"
    ],
    correctAnswer: "Tuple"
},
{
    question: "What will be the output of the following code?<br>"+
    "x = 5<br>"+
    "y = 10<br>"+
    "print(x + y)<br>",

    choices: [
        "510",
        "15",
        "5 10",
        "None of the above"
    ],
    correctAnswer: "15",
},
{
    question: "How do you start a comment in Python?",
    choices: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "# This is a comment",
        "/* This is a comment */"
    ],
    correctAnswer: "# This is a comment",
},
{
    question: "What is the output of the following code?"+
    "x = &quot;Python&quot;"+
    "print(x[0])",
    choices: [
        "P",
        "y",
        "n",
        "o"
    ],
    correctAnswer: "P",
},
{
    question: "Which keyword is used to create a function in Python?",
    choices: [
        "function",
        "def",
        "fun",
        "define"
    ],
    correctAnswer: "def",
},
{
    question7: "What will be the output of the following code?"+
    "for i in range(3):"+
        "print(I)",
    choices: [
        "0 1 2 3 ",
        "0 1 2",
        "1 2 3",
        "Error"
    ],
    correctAnswer: "0 1 2",
},
{
    question: "How can you insert a new item into a list at a specific position?",
    choices: [
        " list.add(1, &quot;item&quot;)",
        "list.insert(1, &quot;item&quot;)",
        "list.append(1, &quot;item&quot;)",
        "list.push(1, &quot;item&quot;)",
    ],
    correctAnswer: "list.insert(1, &quot;item&quot;)",
},
{
    question: "Which of the following methods can be used to remove whitespace characters from the beginning or end of a string?",
    choices: [
        "strip()",
        "trim()",
        "len()",
        "cut()",
    ],
    correctAnswer: "strip()",
},
{
    question: "Which of the following statements is true about Python variable names?",

    choices: [
        "Variable names can begin with a number.",
        "Variable names are case-sensitive.",
        "Variable names can contain spaces.",
        "Variable names must begin with a special character."
    ],
    correctAnswer: "Variable names are case-sensitive."
},
{
    question: "What will be the output of the following code?"+
    "numbers = [1, 2, 3, 4]"+
    "print(numbers[-2])",

    choices: [
        "2",
        "3",
        "4.",
        "IndexError"
    ],
    correctAnswer: "4"
},
{
    question: "How do you create a dictionary in Python?",

    choices: [
        "d = {}",
        "d = []",
        "d = ()",
        "d = <>"
    ],
    correctAnswer: "d = {}"
},
{
    question: "What is the correct way to create a set in Python?",

    choices: [
        "s = {1, 2, 3}",
        "s = [1, 2, 3]",
        "s = (1, 2, 3)",
        "s = <1, 2, 3>"
    ],
    correctAnswer: "s = {1, 2, 3}"
},
{
    question: "What is the output of the following code?"+
    "x = &quothello&quot"+
    "print(x.upper())",


    choices: [
        "HELLO",
        "hello",
        "Hello",
        "Error"
    ],
    correctAnswer: "HELLO"
},
{
    question: "Which of the following is used to handle exceptions in Python?",

    choices: [
        "try/except",
        "str.length()",
        "len(str)",
        "str.len()"
    ],
    correctAnswer: "len(str)"
}
];


setDoc(cppDocRef, { questions: questionsData }, { merge: true })
    .then(() => {
        console.log("Questions added to the Python document!");
    })
    .catch((error) => {
        console.error("Error adding questions: ", error);
    });

    async function fetchQuestions() {
        const cppDocRef = doc(collection(db, "Questions"), "Python");
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