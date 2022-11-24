

function random() {
  // Random numbers from 1 to 6
  var ranOne = Math.floor(Math.random() * 6) + 1;
  var ranTwo = Math.floor(Math.random() * 6) + 1;

  // Image is based on the randomizer
  var ranOneimg = 'images/dice' + ranOne + '.png';
  var ranTwoimg = 'images/dice' + ranTwo + '.png';

  var diceOne = document.querySelectorAll('img')[0];
  diceOne.setAttribute('src', ranOneimg);
  var diceTwo = document.querySelectorAll('img')[1];
  diceTwo.setAttribute('src', ranTwoimg);

  if (ranOne > ranTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (ranOne < ranTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});
