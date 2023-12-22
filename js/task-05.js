const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (input.value === "") {
    span.textContent = "Anonymous";
  }
});
