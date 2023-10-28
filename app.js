// Grab html elements

const container = document.querySelector('#container');
const squares = document.querySelectorAll('.square');
const button = document.querySelector('#button');
let gridSize = 50;

// Add Default grid

createGrid(gridSize);

// Event Listener to change square color using Event Delegation on the Container Parent Element

container.addEventListener(
  'mouseenter',
  (e) => {
    if (e.target.classList.contains('square')) {
      e.target.classList.add('black');
    }
  },
  true
);

// Reset board to user inputted grid size

// button.addEventListener('click', () => {
//   reset();
//   let gridSize = prompt('How big would you like your grid to be? (Maximum = 100)');
//   createGrid(gridSize);
// });

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
    newSquare.style.width = `${700 / amount}px`;
    newSquare.style.height = `${700 / amount}px`;
    container.appendChild(newSquare);
    for (let n = 0; n < amount; n++) {
      let innerSquare = document.createElement('div');
      innerSquare.classList.add('square');
      innerSquare.style.width = `${700 / amount}px`;
      innerSquare.style.height = `${700 / amount}px`;
      newSquare.appendChild(innerSquare);
    }
  }
}
