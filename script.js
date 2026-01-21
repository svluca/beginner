const question = document.getElementById("question");
const raspunsCorect = question.dataset.answer;

const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  if (answer.value === raspunsCorect) {
    question.style.display = "none";
    secret.style.display = "block";
  } else {
    alert("Greșit, mai încearcă ❤️");
  }
});
