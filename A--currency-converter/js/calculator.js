let inputElement = document.querySelector(".js-input");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result--2");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let input = inputElement.value;

  let result = input * 5.21;

  resultElement.innerText = result.toFixed(2);
});

formElement.addEventListener("reset", (event) => {
  resultElement.innerText = "N/A";
});
