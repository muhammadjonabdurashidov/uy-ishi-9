alert("Welcome");
let enterNumber = prompt("son kiriting");
let btnAnswer = document.querySelector(".btn-answer");
let answer = document.querySelector(".answer");

function answerfunction() {
 return enterNumber ** 2;
};

btnAnswer.addEventListener("click", () => {
  document.querySelector(".answer").innerHTML = answerfunction();
})