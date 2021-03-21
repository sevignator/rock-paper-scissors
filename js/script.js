let playerScore = 0;
let computerScore = 0;

const rockControl = document.querySelector('#rock');
const paperControl = document.querySelector('#paper');
const scissorsControl = document.querySelector('#scissors');

const gameMessage = document.querySelector('#message');
const scoreCard = document.querySelector('#score');
const playerCard = document.querySelector('#player span');
const cpuCard = document.querySelector('#cpu span');

const replayButton = document.querySelector('#replay');

rockControl.addEventListener('click', () => {
  const roundResult = playRound('rock', computerPlay());
  adjustScore(roundResult);
  checkGameStatus();
});

paperControl.addEventListener('click', () => {
  const roundResult = playRound('paper', computerPlay());
  adjustScore(roundResult);
  checkGameStatus();
});

scissorsControl.addEventListener('click', () => {
  const roundResult = playRound('scissors', computerPlay());
  adjustScore(roundResult);
  checkGameStatus();
});

replayButton.addEventListener('click', restartGame);

function adjustScore(roundResult) {
  // Show round result message on screen
  gameMessage.textContent = roundResult;

  // Increment scores based on the 
  if (roundResult.startsWith('You win')) {
    playerScore++;
  } else if (roundResult.startsWith('You lose')) {
    computerScore++;
  }

  playerCard.textContent = playerScore;
  cpuCard.textContent = computerScore;
}

function computerPlay() {
  // Generate a random number between 0 and 2 (three total options)
  const randomNumber = Math.floor(Math.random() * 3);

  // Declare an empty variable to hold the future value of the computer's move
  let computerMove;

  // Assign a value to the above variable based on the random number provided earlier
  switch (randomNumber) {
    case 0:
      computerMove = 'rock';
      break;
    case 1:
      computerMove = 'paper';
      break;
    case 2:
      computerMove = 'scissors';
  }

  // Output the computer's move
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  // Stardardize the user input to be lowercase
  playerSelection = playerSelection.toLowerCase();

  console.log(playerSelection);
  console.log(computerSelection);

  // Handle situations where the user chose 'rock'
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'It\'s a tie. You both chose rock.';
    } else if (computerSelection === 'scissors') {
      return 'You win the round! Rock beats scissors';
    } else if (computerSelection === 'paper') {
      return 'You lose the round... Paper beats rock.';
    }
  }

  // Handle situations where the user chose 'paper'
  else if (playerSelection === 'paper') {
    if (computerSelection === 'paper') {
      return 'It\'s a tie. You both chose paper.';
    } else if (computerSelection === 'rock') {
      return 'You win the round! Paper beats rock.';
    } else if (computerSelection === 'scissors') {
      return 'You lose the round... Scissors beats paper';
    }
  }

  // Handle situations where the user chose 'scissors'
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'scissors') {
      return 'It\'s a tie. You both chose scissors.';
    } else if (computerSelection === 'paper') {
      return 'You win the round! Scissors beat paper.';
    } else if (computerSelection === 'rock') {
      return 'You lose the... Rock beats scissors';
    }
  }

  // Handle any other situations
  else {
    return 'You lose the round... Invalid selection :(';
  }
}

function checkGameStatus() {
  if (playerScore === 5 || computerScore === 5) {
    gameMessage.textContent =
      `Game over!
      ${playerScore > computerScore ? 'Congrats, you won the match :)' : 'That\'s too bad... the computer has won the match :,('}`;

    rockControl.style.display = 'none';
    paperControl.style.display = 'none';
    scissorsControl.style.display = 'none';

    scoreCard.style.display = 'none';
    replayButton.style.display = 'block';
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  playerCard.textContent = playerScore;
  cpuCard.textContent = computerScore;
  gameMessage.textContent = '–';

  rockControl.style.display = 'block';
  paperControl.style.display = 'block';
  scissorsControl.style.display = 'block';

  scoreCard.style.display = 'block';
  replayButton.style.display = 'none';
}