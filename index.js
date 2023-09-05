const inputElement = document.getElementsByClassName("inputs");
const errElement = document.getElementById("err");

const getInput = () => {
  const arrInput = inputElement[0].value;
  const eqnInput = inputElement[1].value;
  console.log(`Array: ${arrInput}`);
  console.log(`Equation: ${eqnInput}`);

  if (arrInput && eqnInput) {
    // Check if Array value is valid
    //If input is not x, display number input.
    // Hide error message unless it needs to be displayed.
    //Add some CSS styling.
  } else {
    errElement.textContent = "Error: Input fields cannot be empty!";
  }
};
