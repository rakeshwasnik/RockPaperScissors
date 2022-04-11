/*Random Rock-Paper-Scissor generator on behalf of Computer
generate random number from 0 to 2, use them as an index for array,
resulting in random Rock-Paper-Scissors output*/
function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissors'];
    let id = Math.floor(Math.random() * 3);
    return play[id];
}


//for standardizing user input: Rock Paper Scissors
function capitalize(str) {
    
    let capped = str[0].toUpperCase()+str.slice(1).toLowerCase();
    return capped;
}



function playRound (playerSelection, computerSelection) {
    const playa = capitalize(playerSelection); //same for rock, RocK, rOCK etc
    if (playa == computerSelection) {
        return 'Nobody Wins, Try Again'
    }
    else if ((playa == 'Rock' && computerSelection == 'Paper') || (playa == 'Paper' && computerSelection == 'Scissors') || (playa == 'Scissors' && computerSelection == 'Rock')) {
        return 'Computer Wins!'
    }
    else if ((playa == 'Paper' && computerSelection == 'Rock') || (playa == 'Scissors' && computerSelection == 'Paper') || (playa == 'Rock' && computerSelection == 'Scissors')) {
        return 'Player Wins!'
    }
    
  }


//writing game() function for a 5-round game of Rock-Paper-Scissors
function game() {
    let WinRecord = 0; //for recording who wins, Player wins if -ve, computer wins if +ve
    let result;
    //for loop for a 5-round game
    for (i=0; i<5; i++) {
        let playerSelection = String(prompt("Choose either Rock, Paper or Scissors"))
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        //console.log(result)
        if (result == 'Computer Wins!') {
            WinRecord = WinRecord+1;
        }
        else if (result == 'Player Wins!') {
            WinRecord = WinRecord-1
        }
    }

    //printing result: who won?
    if (WinRecord<0) {
        console.log('Player Wins!');
    }
    else if (WinRecord>0) {
        console.log('Computer Wins!');
    }
    else {
        console.log('Nobody Wins, Try Again');
    }
}
