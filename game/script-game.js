let Player = 0;
let Computer = 0;
const choices = ["rock", "paper", "scissors"];
const results = document.querySelector('[data-results]')
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener( 'click', () => {
    const playerSelection = selectionButton.dataset.selection;
    const computerSelection = computerPlay();
    if(Player < 5 && Computer <5) 
      playRound(playerSelection, computerSelection);
    else {
      winner(); 
      Player = 0
      Computer = 0
    }
    })
})

function computerPlay () {
    return choices [Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection) {
    results.innerText = `It's a draw! Computer score:${Computer}: Player score:${Player}`
  } else if (playerSelection === "rock" && computerSelection === "scissors" 
          || playerSelection === "paper" && computerSelection === "rock" 
          || playerSelection === "scissors" && computerSelection === "paper") {
    Player++;
    results.innerText = `You win! Computer score:${Computer}: Player score:${Player}`
  } else {
    Computer++;
    results.innerText = `Computer wins! Computer score:${Computer}: Player score:${Player}`
  }
}

function winner() {
  if(Computer == Player) {
    results.innerText = `It's a draw! Computer score:${Computer}:Player score:${Player}`
  } else if (Computer > Player) {
    results.innerText = `Computer wins! Computer score:${Computer}:Player score:${Player}`
  } else {
    results.innerText = `You win! Computer score:${Computer}:Player score:${Player}`
  }
}