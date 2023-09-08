const inputElement = document.getElementsByClassName("inputs");
const errElement = document.getElementById("err");

const getSelectedEqn = () => {
  // Retrieve selected value from drop-down list
  const selectedEquation = document.getElementById("equation");
  const index = selectedEquation.selectedIndex;
  const equationValue = selectedEquation.options[index].text;
  return equationValue;
};

const handleSelection = (e) => {
  const numInputElement = document.getElementById("num");
  console.log(getSelectedEqn())

  getSelectedEqn() === "x"
    ? (numInputElement.style.display = "none")
    : (numInputElement.style.display = "inline-block");
};

const getInput = () => {
  const arrInput = inputElement[0].value;
  const eqnInput = inputElement[1].value;

  const eqn = getSelectedEqn();

  switch (eqn) {
    case 0:
      equationValue.includes("*");
      // Perform map
      break;
    case 1:
      equationValue.includes("+");
      // Perform map
      break;
    case 2:
      equationValue.includes("-");
      // Perform map
      break;
    case 3:
      equationValue.includes("/");
      // Perform map
      break;
    case 4:
      equationValue.includes("^");
      // Perform map
      break;
    default:
    // No input selected.
  }

  // Display error msg
  const errorMessage = (msg) => {
    errElement.style.display = "flex";
    errElement.textContent = msg;
  };

  if (arrInput && eqnInput) {
    // Hide error message
    errElement.style.display = "none";
    // Check if Array value is valid & map numbers to a new array.
    const numsArr = [];

    // Check if each comma separated value is a valid number
    arrInput
      .split(",")
      .forEach((char) =>
        !isNaN(char.trim())
          ? numsArr.push(parseInt(char))
          : errorMessage(
              "Error: please enter a valid comma separated array of numbers eg. 1, 2, 3, 4!"
            )
      );

    console.log(numsArr.length, arrInput.split(",").length);

    //If input is not x, display number input.
    !isNaN(eqnInput.trim())
      ? console.log(eqnInput.trim())
      : errorMessage("Please enter a valid number for the selected equation!");

    //Hide equation if option is just x
    //Implement map operation
    //Add some CSS styling.
  } else {
    errorMessage("Error: Input fields cannot be empty!");
  }
};
