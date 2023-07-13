const display = document.getElementById("display");

// Function to handle number button clicks
const handleButtonClick = (event) => {
  const clickedButton = event.target;
  const buttonText = clickedButton.textContent;

  // Append the clicked button's text to the display

  if(display.value == 0) {
    display.value = ""
    display.value += buttonText;
  }
  else 
  {display.value += buttonText};
}

// Attach click event listeners to all number buttons
const buttons = document.querySelectorAll(".num-button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

//Function to make calculation and display results
const calculate = () => {
  resultValue = display.value;
  let result = eval(resultValue);
  display.value = result;
};

//event listener for equals button
const equals = document.getElementById("equals");
const handleCalculate = () => {
  console.log(display.value);
}
equals.addEventListener("click", calculate);

// Function to handle C button click
const clear = document.getElementById("clear");
const handleCClick = () => {
  // Append the clicked button's text to the display
  display.value = "0";
}
clear.addEventListener("click", handleCClick);