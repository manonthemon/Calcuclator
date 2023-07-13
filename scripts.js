const display = document.getElementById('display');

// Function to handle button clicks
function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonText = clickedButton.textContent;
  
  // Append the clicked button's text to the display
  display.value += buttonText;
}

// Attach click event listeners to all buttons
const buttons = document.querySelectorAll('#num-pad button');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});


const clear = document.getElementById('clear');

// Function to handle C button click
function handleCClick(event) {
  const cButton = event.target;
  // Append the clicked button's text to the display
  display.value = ""
}

clear.addEventListener('click' , handleCClick )
