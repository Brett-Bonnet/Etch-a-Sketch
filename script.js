const container = document.querySelector('#container');
const boxdiv = document.getElementsByClassName('boxdiv');
const reset = document.getElementById('reset');
const randomColors = document.getElementById('random-colors')
let defaultSize = 10000;


var cell = document.querySelectorAll('.boxdiv');

function getGrid(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('boxdiv')
    const specs = Math.sqrt(num);
    height = 600 / specs;
    width = 600 / specs;
    div.style.width = `${height}px`;
    div.style.height = `${width}px`;
    container.appendChild(div);
  }
  const divs = document.querySelectorAll('.boxdiv');
  divs.forEach(div => div.addEventListener('mouseover', changeColor));
};

function changeColor(e){
e.target.style.backgroundColor = 'black';
}

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
let howMany = prompt("How many squares would you like?");
rmvGrid();
getGrid(howMany)
}



reset.addEventListener('click', resetGrid);


const onLoad = () => {
  getGrid(defaultSize);
}

onLoad();





reset.addEventListener('click', resetGrid);


const onLoad = () => {
  getGrid(defaultSize);
}

onLoad();

;
