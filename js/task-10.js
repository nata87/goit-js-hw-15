function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.querySelector("#boxes");
const controllsCount = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }

  boxesDiv.append(...boxes);
}

createButton.addEventListener("click", () => {
  const requestedBoxCount = parseInt(controllsCount.value);

  if (!isNaN(requestedBoxCount) && requestedBoxCount > 0) {
    createBoxes(requestedBoxCount);
  }
});

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
