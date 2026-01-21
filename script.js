const dataCorecta = "11.02.2002";

const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  if (answer.value === dataCorecta) {
    question.style.display = "none";
    secret.style.display = "block";
  } else {
    alert("Greșit, mai încearcă ❤️");
  }
});
