import { examQuestions } from "./DataBase.js";
import { createProgressBar } from "./ProgressBar.js";
import { startTimer } from "./TimerBar.js";
import { shuffleArray } from "./utils.js";

const homePage = document.querySelector(".home-page");
const examPage = document.querySelector(".exam-page");
const resultPage = document.querySelector(".result-page");
const questionTitle = document.querySelector("#question-title");
const questionImage = document.querySelector("#question-image");
const answersContainer = document.querySelector("#answers");
const nextButton = document.querySelector("#next-button");
const resultMessage = document.querySelector("#result-message");
const questionNumber = document.querySelector(".question-number");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

export function startExam() {
  homePage.classList.add("hidden");
  examPage.classList.remove("hidden");
  createExam();
  timerInterval = startTimer();
  loadQuestion();
}
function createExam() {
  shuffleArray(examQuestions);
  examQuestions.forEach((question) => shuffleArray(question.answers));
}

function loadQuestion() {
  const currentQuestion = examQuestions[currentQuestionIndex];
  questionTitle.innerText = currentQuestion.title;
  questionImage.src = currentQuestion.image;
  answersContainer.innerHTML = "";
  questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${
    examQuestions.length
  }`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.addEventListener("click", () => {
      selectAnswer(button.innerText);
    });
    answersContainer.appendChild(button);
  });
  nextButton.disabled = true;
}

function selectAnswer(selectedAnswer) {
  for (let button of answersContainer.children) {
    if (button.innerText === selectedAnswer) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  }
  examQuestions[currentQuestionIndex].userAnswer = selectedAnswer;
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  if (
    examQuestions[currentQuestionIndex].userAnswer ===
    examQuestions[currentQuestionIndex].correctAnswer
  ) {
    score++;
  }
  nextQuestion();
});

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < examQuestions.length) {
    loadQuestion();
  } else {
    endExam();
  }
}

export function endExam() {
  clearInterval(timerInterval);
  examPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
  createProgressBar(score);
  resultMessage.textContent = `You solved ${score} questions correctly out of ${examQuestions.length}`;
}
