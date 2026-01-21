const secret = document.getElementById("secret");
const question = document.getElementById("question");
const raspunsCorect = question.dataset.answer;
const mesajEroare = question.dataset.error;

const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  if (
    answer.value.trim().toLowerCase() ===
    raspunsCorect.trim().toLowerCase()
  ) {
    question.style.display = "none";
    secret.style.display = "block";
  } else {
    msg.textContent = mesajEroare;
  }
});
