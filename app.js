// Grab html elements

const container = document.querySelector('#container');
const squares = document.querySelectorAll('.square');
const button = document.querySelector('#button');

// Event Listener to add divs to board on page load

window.addEventListener('load', () => {
  for (let i = 1; i < 50; i++) {
    createSquare();
  }
});

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

button.addEventListener('click', () => {
  reset();
  //   prompt('How big would you like your grid to be? (Maximum = 100)');
});

//Functions
function reset() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function createSquare() {
  let newSquare = document.createElement('div');
  newSquare.classList.add('square');
  container.appendChild(newSquare);
}
