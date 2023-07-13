const display = document.getElementById("display");

// Function to handle number button clicks
function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonText = clickedButton.textContent;

  // Append the clicked button's text to the display
  display.value += buttonText;
}

// Attach click event listeners to all number buttons
const buttons = document.querySelectorAll(".num-button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

//Function to make calculation and display results
function calculate() {
  resultValue = display.value;
  var result = eval(resultValue);
  display.value = result;
}

//event listener for equals button
const equals = document.getElementById("equals");
function handleCalculate() {
  console.log(display.value);
}
equals.addEventListener("click", calculate);

// Function to handle C button click
const clear = document.getElementById("clear");
function handleCClick(event) {
  // Append the clicked button's text to the display
  display.value = "";
}
clear.addEventListener("click", handleCClick);
