let losses = 0;
let wins = 0;

const player = document.getElementById("player");
const opponent = document.getElementById("opponent");
const results = document.getElementById("results");
const winsCounter = document.getElementById("wins");
const lossesCounter = document.getElementById("losses");

const play = (userChoice) => {
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        player.innerHTML = 'You chose ' + userChoice + '.';
    }
    else {
        player.innerHTML = 'Invalid choice';
        return false;
    }

    const opponentChoiceNum = Math.floor(Math.random() * 3);
    let opponentChoice;

    if (opponentChoiceNum === 0) {
        opponentChoice = 'rock';
    } else if (opponentChoiceNum === 1) {
        opponentChoice = 'paper';
    } else {
        opponentChoice = 'scissors';
    }

    opponent.innerHTML = 'Your opponent chose ' + opponentChoice + '.';
    results.innerHTML = compare(userChoice, opponentChoice);
    
    winsCounter.innerHTML = wins;
    lossesCounter.innerHTML = losses;
}

const compare = (choice1, choice2) => {
    if (choice1 === choice2) {
        return 'The result is a tie!';
    } else if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            wins++;
            return 'Your rock smashed the scissors.';
        } else {
            losses++;
            return 'The rock was surrounded by the paper';
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            wins++;
            return 'Your paper covered the rock.';
        } else {
            losses++;
            return 'The paper was chopped in half by the scissors';
        }
    } else if (choice1 === 'scissors') {
        if (choice2 === 'paper') {
            wins++;
            return 'Your scissors sliced the paper.';
        } else {
            losses++;
            return 'The scissors were smashed by the rock';
        }
    }
    return 'Invalid choice';
}

const reset = function () {
    wins = 0;
    losses = 0;
    winsCounter.innerHTML = wins;
    lossesCounter.innerHTML = losses;
}

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('rock').addEventListener('click', () => {
    play('rock');
});
document.getElementById('paper').addEventListener('click', () => {
    play('paper');
});
document.getElementById('scissors').addEventListener('click', () => {
    play('scissors');
});
