let btns = document.querySelectorAll('button');
let win = 0;
let lose = 0;
let tie = 0;
let play;
let msg;     
let computerSelection = computerPlay();
let playerSelection;

btns.forEach((button)=>{
  button.addEventListener('click', ()=>{
  playerSelection = button.id;
  gameon(playerSelection, computerSelection);    
  });
});

const options = ["rock", "paper", "scissors"];
        const check = ["rockrock", "rockpaper", "rockscissors", "paperrock", "paperpaper", "paperscissors",
                      "scissorsrock", "scissorspaper", "scissorsscissors"];

      
      
        function computerPlay () {
          play = options[Math.round(2*Math.random())];
          return play;
          }

        function gameon (a, b) {
          computerPlay();
            let x = a + b;
            if (x == check[0]  || x == check [4]  || x == check[8]) {
                msg = "Tie!";
                tie++;
            }
            else if (x == check[1] || x == check[5] || x == check[6]) {
                msg = "U kinda just got owned...";
                lose++;
            }
            else if (x == check[2] || x == check[3] || x == check[7]) {
                msg = "Aye! Winner winner pollito con papas dinner!"
                win++;
            }
            else {
                msg = "Do you hate the game or the player?"
            }
            return msg;
        }
        


          
        

        window.alert("Computer played "+ computerSelection + ". You played " + playerSelection +". " + msg);
        }

        window.alert("Out of " + gamenum + " games, computer won " + lose + " games, you won " +
         win + " games, and " + tie + " games were tied. You won " + Math.floor(100*win/gamenum) + "% of games!");
        
        if (win == lose){
            window.alert("TIE")
        } else if (lose > win){
            window.alert("AI beat you!")
        } else if (win > lose){
           window.alert("You beat randomness!")
        }


