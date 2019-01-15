const container = document.querySelector('#container');
const boxdiv = document.getElementsByClassName('boxdiv');
const reset = document.getElementById('reset');
const randomColors = document.getElementById('random-colors')
const eraseBtn = document.getElementById('eraser');
let defaultSize = 100;
let isBlack = true;

var cell = document.querySelectorAll('.boxdiv');

function getGrid(num) {
  for (let i = 0; i < Math.pow(num, 2); i++) {
    const div = document.createElement('div');
    div.classList.add('boxdiv')
    const toSquare = Math.pow(num, 2);
    const specs = Math.sqrt(toSquare);
    height = 600 / specs;
    width = 600 / specs;
    div.style.width = `${height}px`;
    div.style.height = `${width}px`;
	div.addEventListener('mouseover', setBoxColor)
    container.appendChild(div);
  }
};




function clearBox() {
  const divs = document.querySelectorAll('.boxdiv');
  divs.forEach(div => div.style.backgroundColor = '#ffffff');
}

function rmvGrid() {
var myNode = document.getElementById("container");
while (myNode.firstChild) {
  myNode.removeChild(myNode.firstChild);	
}	
}

function resetGrid() {
let howMany = prompt("How many squares per side would you like?");
if (isNaN(howMany) || Math.sign(howMany) !== 1) {
  alert("You must enter a proper number!");
  window.location.reload();
}
rmvGrid();
getGrid(howMany)
};




reset.addEventListener('click', resetGrid);
randomColors.addEventListener('click', () => {
  randomColors.classList.toggle('rainbow-highlight')  
});
randomColors.addEventListener('click', setColorStatus)
eraseBtn.addEventListener('click', () => {
  eraseBtn.classList.toggle('eraser-highlight')
   
});

	


function setColorStatus() {
    if(isBlack){
        isBlack = 0;
    }else {
        isBlack = true;
    }
}


function setBoxColor() {
	if (isBlack == true) {
		this.style.backgroundColor = "black"
	} else if (isBlack == false) {
		this.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);	
	}
	
}

const onLoad = () => {
  getGrid(defaultSize);
}

onLoad();


