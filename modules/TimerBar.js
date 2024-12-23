import { endExam } from "./Exam.js";

const timerBar = document.querySelector(".timer-bar");
const timeElement = document.querySelector(".time-left");

export function startTimer() {
  let timeLeft = 60;
  timeElement.innerText = `${timeLeft}`;
  return setInterval(() => {
    timerBar.style.width = `${(--timeLeft / 60) * 100}%`;
    timeElement.innerText = `${timeLeft}`;
    if (timeLeft == 0) {
      clearInterval(timeLeft);
      endExam();
    }
  }, 1000);
}
