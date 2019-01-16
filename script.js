const reset = document.getElementById('reset');
const randomColors = document.getElementById('random-colors');
const container = document.querySelector('#container');
const boxdiv = document.getElementsByClassName('boxdiv');
let defaultSize = 100;
let boxDivBlack = true;

function getGrid(num) {
  for (let i = 0; i < Math.pow(num, 2); i++) {
    const div = document.createElement('div');
    div.classList.add('boxdiv');
    const toSquare = Math.pow(num, 2);
    const specs = Math.sqrt(toSquare);
    height = 600 / specs;
    width = 600 / specs;
    div.style.width = `${height}px`;
    div.style.height = `${width}px`;
	div.addEventListener('mouseover', setBoxColor);
    container.appendChild(div);
  }
};

function resetGrid() {
let howMany = prompt("How many squares per side would you like?");
    if (isNaN(howMany) || Math.sign(howMany) !== 1) {
      alert("You must enter a proper number!");
      window.location.reload();
    }

rmvGrid();
getGrid(howMany);
};

function rmvGrid() {
var myNode = document.getElementById("container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);	
  }	
}

function setBoxColor() {
  if (boxDivBlack == true) {
	  this.style.backgroundColor = "black";
	} else if (boxDivBlack == false) {
	    this.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);	
  }	
}

function setColorStatus() {
  if(boxDivBlack){
    boxDivBlack = 0;
    } else {
      boxDivBlack = true;
  }
}

const onLoad = () => {
  getGrid(defaultSize);
}

onLoad();

reset.addEventListener('click', resetGrid);
randomColors.addEventListener('click', setColorStatus);
randomColors.addEventListener('click', () => {
  randomColors.classList.toggle('random-highlight');  
});


	
