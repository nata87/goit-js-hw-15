const fontSizeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");
const changeFontSize = function () {
  text.style.fontSize = `${this.value}px`;
};

fontSizeInput.addEventListener("input", changeFontSize);
