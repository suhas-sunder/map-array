const inputElement = document.getElementsByClassName("inputs");
const errElement = document.getElementById("err");

const getInput = () => {
  const arrInput = inputElement[0].value;
  const eqnInput = inputElement[1].value;

  // Display error msg
  const errorMessage = (msg) => {
    errElement.textContent = msg;
  };

  if (arrInput && eqnInput) {
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
    // Hide error message unless it needs to be displayed.
    //Add some CSS styling.
  } else {
    errorMessage("Error: Input fields cannot be empty!");
  }
};
