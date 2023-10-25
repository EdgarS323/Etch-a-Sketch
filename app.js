// Grab html elements

const container = document.querySelector('#container');
const square = document.querySelector('.square');

// Create Square

const createSquare = () => {
  let newSquare = document.createElement('div');
  newSquare.classList.add('square');
  container.appendChild(newSquare);
};

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

// Functiont to reset board
function reset() {
  square.classList.remove('black');
}
