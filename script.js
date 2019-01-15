const container = document.querySelector('#container');
const boxdiv = document.getElementsByClassName('boxdiv');
const reset = document.getElementById('reset');
const randomColors = document.getElementById('random-colors')
let defaultSize = 100;
const rndButton = document.getElementsByClassName('highlight')
let randomColorMode = false;

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
let howMany = prompt("How many squares per side would you like?");
if (isNaN(howMany) || Math.sign(howMany) !== 1) {
  alert("You must enter a proper number!");
  window.location.reload();
}
rmvGrid();
getGrid(howMany)
};



reset.addEventListener('click', resetGrid);
randomColors.addEventListener('click', toggleRandomColor);
randomColors.addEventListener('click', function() {
      const random = document.querySelector("#random-colors")	
      random.classList.toggle('highlight');
  });



const onLoad = () => {
  getGrid(defaultSize);
}

onLoad();








function toggleRandomColor(e) {

      
  if (!randomColorMode) {
      const divs = document.querySelectorAll('.boxdiv');
      divs.forEach(div => div.addEventListener('mouseover', function() {

      e.target.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);        
      randomColorMode = true;

      }))           		
} else {
  const divs = document.querySelectorAll('.boxdiv');
  divs.forEach(div => div.addEventListener('mouseover', function() {

  e.target.style.backgroundColor = 'black';        
  randomColorMode = false

       }));

	}

}