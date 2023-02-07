

let color = 'white';

function buttonClicked() {
  	let elements = document.getElementsByClassName('column'); // get all elements
  if (color == "white") {
    for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "blue";
	  }
  }
  else {
    for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
  }
  }
}
