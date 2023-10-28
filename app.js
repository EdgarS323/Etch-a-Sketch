// Grab html elements

const container = document.querySelector('#container');
let squares = document.querySelectorAll('.square');
const button = document.querySelector('#button');
let gridSize = 30;

// Add Default grid
createGrid(gridSize);

// Event Listeners

container.addEventListener(
  'mouseover',
  (e) => {
    e.stopPropagation();
    e.target.classList.add('black');
  },
  true
);

button.addEventListener('click', () => {
  reset();
  let userSelected = prompt('Choose a number between 2 - 100 for your grid size');
  while (userSelected > 100) {
    userSelected = prompt('Choose a number between 2 - 100 for your grid size');
  }
  createGrid(userSelected);
});

//Functions

function reset() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function createGrid(amount) {
  for (let i = 0; i < amount; i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.style.width = `${container.clientWidth / amount}px`;
    newSquare.style.height = `${container.clientHeight / amount}px`;
    container.appendChild(newSquare);
    for (let n = 0; n < amount; n++) {
      let innerSquare = document.createElement('div');
      innerSquare.classList.add('square');
      innerSquare.style.width = `${container.clientWidth / amount}px`;
      innerSquare.style.height = `${container.clientHeight / amount}px`;
      newSquare.appendChild(innerSquare);
    }
  }
}
