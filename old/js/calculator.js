let inputElement = document.querySelector(".input");
let formElement = document.querySelector(".form");
let resultElement = document.querySelector(".result--2");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = inputElement.value;

    let result = input * 5.21;

    resultElement.innerText = result.toFixed(2);

    });

formElement.addEventListener("reset", (event) => {
    resultElement.innerText = "N/A";
    });