const oneStickButton = document.getElementById("one");
const twoStickButton = document.getElementById("two");
const threeStickButton = document.getElementById("three");

const resetButton = document.getElementById("reset");
const stickCount = document.getElementById("stickCount");
const playerTurn = document.getElementById("turnCount");

let numberOfSticks = 10;
let turn = 1;

function removeSticks(amount) {
    numberOfSticks -= amount;
    stickCount.innerHTML = numberOfSticks;

    turn %= 2;
    turn++;
}

function checkButtons() {
    if (numberOfSticks < 1) {
        oneStickButton.disabled = true
    } else {
        oneStickButton.disabled = false
    }
    if (numberOfSticks < 2) {
        twoStickButton.disabled = true
    } else {
        twoStickButton.disabled = false
    }
    if (numberOfSticks < 3) {
        threeStickButton.disabled = true
    } else {
        threeStickButton.disabled = false
    }
}

function checkTurn() {
    if (numberOfSticks <= 0) {
        playerTurn.innerHTML = "Player " + turn + " wins!";
    }
    if (numberOfSticks > 0) {
        playerTurn.innerHTML = "Player " + turn + "'s Turn";
    } else {
        stickCount.parentElement.hidden = true;
    }
    checkButtons()
}

oneStickButton.onclick = function () {
    removeSticks(1)
    checkTurn()
}

twoStickButton.onclick = function () {
    removeSticks(2)
    checkTurn()
    
}

threeStickButton.onclick = function () {
    removeSticks(3)
    checkTurn()
}

function resetGame() {
    numberOfSticks = 10;
    checkButtons()
    turn = 1
    playerTurn.innerHTML = "Player " + turn + "'s Turn";
    stickCount.innerHTML = numberOfSticks;
    stickCount.parentElement.hidden = false;
}