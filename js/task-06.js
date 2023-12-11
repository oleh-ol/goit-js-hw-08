function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createdBoxes = document.querySelector("#boxes");

const form = document.querySelector("#controls");
form.style.cssText = `
  display: flex;
  gap: 16px;
`
const valueInput = document.querySelector("input");
valueInput.style.cssText = `
  display: flex;
  padding: 8px 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #808080;
`
const createBtn = document.querySelector("button[data-create]");
createBtn.style.cssText = `
  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #4E75FF;
  border: none;

  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
`
const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.style.cssText = `
  display: flex;
  width: 120px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #FF4E4E;
  border: none;

  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.64px;
`
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes() {

  createdBoxes.innerHTML = "";
  const amount = valueInput.value;
  const boxes = [];

  if (amount >= 1 && amount <= 100) {

    let startSize = 30;
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");

      box.style.width = `${startSize}px`;
      box.style.height = `${startSize}px`;
      box.style.backgroundColor = getRandomHexColor();

      startSize += 10;

      boxes.push(box);   
    }
  } else {
    alert("Введіть валідне число!");
  }

  createdBoxes.append(...boxes);
  valueInput.value = "";

};

function destroyBoxes() {
  createdBoxes.innerHTML = "";
}
