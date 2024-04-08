let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
/* if (score === null) {
   score = {
     wins:0,
     losses:0,
     ties:0
   };
 }*/

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }

}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'u lose';
    } else if (computerMove === 'paper') {
      result = 'u win';
    } else if (computerMove === 'scissors') {
      result = 'tie';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'u win';
    } else if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'scissors') {
      result = 'u lose';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'u lose';
    } else if (computerMove === 'scissors') {
      result = 'u win';
    }
  }

  if (result === 'u win') {
    score.wins += 1;
  } else if (result === 'u lose') {
    score.losses += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    `wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();


  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}
