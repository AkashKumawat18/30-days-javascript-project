const questions = [
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"shark",correct: false},
            {text:"Blue Whale",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraffe",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion
}
