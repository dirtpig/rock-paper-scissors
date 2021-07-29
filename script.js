// rock paper scissors

let rock = `fat rock`;
let paper = `thin paper`;
let scissors = `crayola scissors`;

const playerSelection = scissors;
const computerSelection = computerPlay();




// npc chooses 

function computerPlay() {
    
    let choice = Math.floor(Math.random() * 3);
    //console.log(`NPC Chooses: ` + choice);
    switch (choice) {
        case 0: return rock;
        case 1: return paper;
        case 2 : return scissors;
        default: `well something went wrong here...`;

    }     
    
} 

// plays single round

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return `Tie Game`;
    } 
    if (playerSelection === rock && computerSelection === paper) {
        return `You Lose! Your ${rock} is subdued by the ${paper}.`;
    } 
    if (playerSelection === rock && computerSelection === scissors) {
        return `You Win! Your ${rock} smashes the ${scissors}.`;
    }     
    if (playerSelection === paper && computerSelection === scissors) {
        return `You Lose! Your ${paper} is shredded by the ${scissors}.`;
    }
    if (playerSelection === paper && computerSelection === rock) {
        return `You Win! Your ${paper} subdues the ${rock}.`;
    }
    if (playerSelection === scissors && computerSelection === paper) {
        return `You Win! Your ${scissors} shred the ${paper}.`;
    }
    if (playerSelection === scissors && computerSelection === rock) {
        return `You Lose! Your ${scissors} are smashed by the ${rock}.`;
    }

    else return `well something went wrong here... [enter values into the function]`
}


console.log(playRound(playerSelection, computerSelection));

// computer is working correctly it seems. playerSelection is randomizing and never choosing scissors