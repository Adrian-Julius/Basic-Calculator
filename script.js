/* ---------- Simple Calculator Program ---------- */
const valueDisplay = document.getElementById("inputValue");

function calculator(key) {
  const operators = ["-", "+", "*", "/"];
  const inputtedValues = valueDisplay.value;
  let currValue = inputtedValues.slice(-1);
  let prevValue = inputtedValues.slice(-2);

  // Return empty if the first input is (*) or (/)
  if (
    (inputtedValues === operators[2] && currValue != "") ||
    (inputtedValues === operators[3] && currValue != "")
  ) {
    return (valueDisplay.value = "");
  }

  // Ignore the last operator if two consecutive operators
  if (operators.includes(key) && operators.includes(currValue)) {
    return;
  }

  valueDisplay.value += key;
}

function result() {
  try {
    valueDisplay.value = eval(valueDisplay.value);
  } catch (error) {
    // If (=) is clicked and the value ends with operators, it will then be removed
    valueDisplay.value = valueDisplay.value.slice(0, -1);

    // display the result after 1.2 seconds after the removed operator
    setTimeout(() => (valueDisplay.value = eval(valueDisplay.value)), 1000);

    setTimeout(() => {
      window.alert("The value must not end with an operator.");
    }, 1300);

    console.error("Beware! The value must not end with an operator.");
  }
}

function reset() {
  valueDisplay.value = "";
}
