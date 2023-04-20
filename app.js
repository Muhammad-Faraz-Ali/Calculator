const inputElem = document.getElementById("user-input");
const btnElem = document.getElementsByTagName("button");
console.log(Array.from(btnElem));
function calculate(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === "AC") {
    inputElem.value = "";
  } else if (buttonValue === "DEL") {
    const newValue = inputElem.value.substring(0, inputElem.value.length - 1); //removing last character
    inputElem.value = newValue;
  } else if (buttonValue === "=") {
    const result = eval(inputElem.value);
    inputElem.value = result;
  } else {
    inputElem.value += buttonValue;
  }
}
for (let i = 0; i < btnElem.length; i++) {
  btnElem[i].addEventListener("click", calculate);
}
