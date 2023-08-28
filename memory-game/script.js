const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.dataset.color = color; // Store the color as a data attribute
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  const clickedCard = event.target;

  if (flippedCards.length < 2 && clickedCard !== flippedCards[0]) {
    flippedCards.push(clickedCard);
    clickedCard.style.backgroundColor = clickedCard.dataset.color;

    if (flippedCards.length === 2) {
      if (flippedCards[0].dataset.color === flippedCards[1].dataset.color) {
        flippedCards = [];
        matchedPairs++;

        if (matchedPairs === COLORS.length / 2) {
          setTimeout(() => {
            alert("Congratulations! You won!");
          }, 500);
        }
      } else {
        setTimeout(() => {
          flippedCards.forEach(card => {
            card.style.backgroundColor = "";
          });
          flippedCards = [];
        }, 1000);
      }
    }
  }
}

createDivsForColors(shuffledColors);
