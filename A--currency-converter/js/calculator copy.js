{
  const formElement = document.querySelector(".js-form");
  const resultElement = document.querySelector(".js-result--2");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputElement = document.querySelector(".js-input");

    const input = inputElement.value;

    const result = input * 5.21;

    resultElement.innerText = result.toFixed(2);
  });

  formElement.addEventListener("reset", (event) => {
    resultElement.innerText = "N/A";
  });
}
