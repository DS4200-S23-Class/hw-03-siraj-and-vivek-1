

let count = 0
function buttonClicked() {
  console.log("button was clicked!");
  count ++;
  txt = "Number of times button clicked: "
  let concat = txt.concat(count);

  //let newText = "Button was clicked";

  // select the element
  let buttonDiv = document.getElementById("button-div");

  buttonDiv.innerHTML = concat;
}

