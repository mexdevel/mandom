const btns = document.querySelectorAll('button');
const results = document.getElementById('container');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('compScore');
const tieGames = document.getElementById('ties');
const startGame = document.getElementById('begin');
 
btns.forEach((button)=>{
    button.addEventListener('click', ()=>{
        gameRound(button.id);
    });
});

function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = Math.floor(Math.random() * 3);
return options[randomOption];
}

 
let playerScore = 0;
let computerScore = 0;
let tie = 0;



function gameRound(playerpick){
let computerpick = computerPlay();
let result ="";

if(playerpick === computerpick) {
    tie++;
    result = "tie";
} 
else if (playerpick === 'rock' && computerpick  === 'scissors' ||
            playerpick === 'paper' && computerpick  === 'rock' ||
            playerpick === 'scissors' && computerpick  === 'paper') {
            playerScore++;
            result = "win";
} 
else {
      computerScore++;
      result = "loss";
}
scoreResult(result);
}

function scoreResult(endgame){
    tieGames.innerHTML = tie;
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;

    switch (endgame){
        case "tie":
            startGame.innerHTML = "It's a Tie!";
            break;
        case "win":
            startGame.innerHTML = "You win this time Human!";
            break;
        default:
            startGame.innerHTML = "AI's are taking over starting with this round!";
    }
    checkstats();
}
function checkstats() {
    if(playerScore >= 5){
        startGame.innerHTML = "Your Creators Triumph, Humans Win!";
        gameOver();
    } else if(computerScore >= 5) {
        startGame.innerHTML = "Human error detected, AI's Prevail!";
        gameOver();
    }
}
function gameOver() {
    const start = document.querySelector('#start');
    const resetButton = document.createElement('BUTTON');
    const buttonVal = document.createTextNode("Play Again?");
    resetButton.appendChild(buttonVal);
    start.appendChild(resetButton);

    resetButton.addEventListener('click', function() {
        reset();
        start.removeChild(resetButton);
    });

    btns.forEach((button) =>{
        button.disabled = true;
        })
}
function reset(){
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    scoreResult();

    btns.forEach((button) =>{
        button.disabled = false;
        });
}


// function game(){
// for(let i = 0; i < 5; i++){
//     gameRound();

// }
// if(playerScore > computerScore){
//    console.log(`You win with the score of ${playerScore} Computer: ${computerScore}`);
// }else if ( computerScore > playerScore){
//    console.log(`AI's are taking over!!!! You lost! the score was computer:${computerScore} Human:${playerScore}`);

// }else if(playerScore === computerScore){
//    console.log(`TieGame`);
// }

// }