const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".form-radio-input");
var rating = document.getElementById("rated");

let ratingVal = "";

radioInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingVal = e.target.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ratingVal) return;
  thankYou(ratingVal);
});

function thankYou(ratingVal) {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  rating.textContent = ratingVal;
}
