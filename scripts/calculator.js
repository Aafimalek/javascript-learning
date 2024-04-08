let displayValue = '';

function calculatePercentage() {
  try {
    let result = eval(displayValue) / 100; // Calculate percentage of current value
    document.getElementById('input').value = result;
    displayValue = result;
  } catch (error) {
    console.error('Error calculating percentage:', error);
  }
}

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('input').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('input').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('input').value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById('input').value = 'Error';
  }
}