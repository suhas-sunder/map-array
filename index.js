const inputElement = document.getElementsByClassName("inputs");
const errElement = document.getElementById("err");

const getSelectedEqn = () => {
  // Retrieve selected value from drop-down list
  const selectedEquation = document.getElementById("equation");
  const index = selectedEquation.selectedIndex;
  const equationValue = selectedEquation.options[index].text;
  return equationValue;
};

// Get the value user selected from drop-down list
const handleSelection = (e) => {
  const numInputElement = document.getElementById("num");
  console.log(getSelectedEqn());

  getSelectedEqn() === "x"
    ? (numInputElement.style.display = "none")
    : (numInputElement.style.display = "inline-block");
};

// Display final result to user
const displayResult = (mappedArr) => {
  const resultElement = document.getElementById("result");

  resultElement.textContent = `Result: ${
    mappedArr.length > 1 ? mappedArr.join(", ") : mappedArr
  }`;
};

// Perform map operation
function map(arr, callback) {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(callback(arr[i]));
  }

  displayResult(mappedArr);
}

// Determine which operation needs to mapped
const handleEquation = (arr, num) => {
  const eqn = getSelectedEqn();

  num = parseInt(num);

  if (eqn.includes("*")) {
    map(arr, (x) => x * num);
  } else if (eqn.includes("+")) {
    map(arr, (x) => x + num);
  } else if (eqn.includes("-")) {
    map(arr, (x) => x - num);
  } else if (eqn.includes("/")) {
    map(arr, (x) => x / num);
    console.log("div");
  } else if (eqn.includes("^")) {
    map(arr, (x) => Math.pow(x, num));
  } else {
    displayResult(arr);
  }
};

//Prepare input values for mapping & perform input validation
const handleSubmit = () => {
  const arrInput = inputElement[0].value;
  const numInput = inputElement[1].value;

  // Display error msg
  const errorMessage = (msg) => {
    errElement.style.display = "flex";
    errElement.textContent = msg;
  };

  if ((arrInput && numInput) || (getSelectedEqn() === "x" && arrInput)) {
    // Hide error message
    errElement.style.display = "none";
    // Check if Array value is valid & map numbers to a new array.
    const numsArr = [];

    // Check if each comma separated value is a valid number
    arrInput
      .split(",")
      .forEach((char) =>
        !isNaN(char.trim()) && char !== " "
          ? numsArr.push(parseInt(char))
          : errorMessage(
              "Error: please enter a valid comma separated array of numbers eg. 1, 2, 3, 4!"
            )
      );

    if (numsArr.length === arrInput.split(",").length)
      handleEquation(numsArr, numInput);

    //If input is not x, display number input.
    !isNaN(numInput.trim())
      ? numInput.trim()
      : errorMessage("Please enter a valid number for the selected equation!");
  } else {
    errorMessage("Error: Input fields cannot be empty!");
  }
};
