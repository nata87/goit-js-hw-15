const input = document.getElementById("validation-input");

function checkInput() {
  const enteredLength = input.value.length;
  const requiredLength = parseInt(input.getAttribute("data-length"));

  if (enteredLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", checkInput);
