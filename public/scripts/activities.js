var clicks = 0;
const onestick = document.querySelector("#one");
const twostick = document.querySelector("#two");
const threestick = document.querySelector("#three");
let numOfSticks = 10;
turn = 1;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function removeOne() {
    numOfSticks--;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
        onestick.innerHTML.disabled = "disabled";
        twostick.innerHTML.disabled = "disabled";
        threestick.innerHTML.disabled = disabled;
    }

}
function removeTwo() {
    numOfSticks -= 2;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
    }
    
}
function removeThree() {
    numOfSticks -= 3;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
    }
}
function resetGame() {
    numOfSticks = 10;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numOfSticks + "</b> sticks in the pile currently";
    turn = 1;
    if (numOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    }
}