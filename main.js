
let color = 'white';

function buttonClicked() {
    // select the element
    if (color == 'black') {
        document.body.style.backgroundColor = "lightblue";
    }
    else {
        document.body.style.backgroundColor = 'white';
    }
    color = document.body.style.backgroundColor;
}
