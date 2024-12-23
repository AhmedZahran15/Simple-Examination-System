class Question {
  constructor(title, image, answers, correctAnswer) {
    this.title = title;
    this.image = image;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;
  }
}

export const examQuestions = [
  new Question(
    "What is the capital of France?",
    "./images/france.jpg",
    ["Berlin", "Madrid", "Paris", "Rome"],
    "Paris"
  ),
  new Question(
    "Which planet is known as the Red Planet?",
    "./images/mars.jpg",
    ["Earth", "Mars", "Jupiter", "Saturn"],
    "Mars"
  ),
  new Question(
    "Who wrote 'Hamlet'?",
    "./images/shakespeare.jpg",
    ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
    "William Shakespeare"
  ),
  new Question(
    "What is the largest ocean on Earth?",
    "./images/pacificOcean.jpg",
    ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "Pacific Ocean"
  ),
  new Question(
    "What is the square root of 64?",
    "./images/sqrt.jpg",
    ["6", "7", "8", "9"],
    "8"
  ),
  new Question(
    "What is the chemical symbol for water?",
    "./images/water.jpg",
    ["H2O", "O2", "CO2", "HO2"],
    "H2O"
  ),
  new Question(
    "Which country is known as the Land of the Rising Sun?",
    "./images/Japan.jpg",
    ["China", "Japan", "South Korea", "Thailand"],
    "Japan"
  ),
  new Question(
    "What is the tallest mountain in the world?",
    "./images/everest.jpg",
    ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    "Mount Everest"
  ),
  new Question(
    "what is the capital of Egypt?",
    "./images/cairo.jpg",
    ["Cairo", "Alexandria", "Luxor", "Aswan"],
    "Cairo"
  ),
  new Question(
    "What is the primary language spoken in Brazil?",
    "./images/brazil.jpg",
    ["Spanish", "Portuguese", "French", "English"],
    "Portuguese"
  ),
];
