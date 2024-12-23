import { startExam } from "./modules/Exam.js";
const startExamButton = document.querySelector("#show-modal");
const nameElement = document.querySelector(".name");
startExamButton.addEventListener("click", () => {
  Swal.fire({
    titleText: "Enter your name",
    input: "text",
    heightAuto: false, // for HTML body height.
    showCancelButton: false,
    confirmButtonText: "Confirm",
    confirmButtonColor: "#007bff",
    didOpen: () => {
      const input = Swal.getInput();
      const confirmButton = Swal.getConfirmButton();
      confirmButton.disabled = true;
      confirmButton.classList.toggle("disabled");
      input.addEventListener("input", () => {
        confirmButton.disabled = !input.value;
        confirmButton.classList.toggle("disabled");
      });
    },
    inputValidator: (value) => {
      if (!value) return "You need to enter your name!";
      else if (/[^a-zA-Z\s]/.test(value))
        return "Only alphabets and spaces are allowed!";
    },
  }).then((result) => {
    if (result.isConfirmed) {
      nameElement.innerHTML += result.value
        .split(" ")
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(" ");
      startExam();
    }
  });
});
