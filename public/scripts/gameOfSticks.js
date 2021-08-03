const onesticks = document.querySelector("#one");
const twosticks= document.querySelector("#two");
const threesticks = document.querySelector("#three");
const reset = document.querySelector("#reset")
let numberOfSticks = 10;
turn = 1;
function removeOne() {
    numberOfSticks--;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numberOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numberOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numberOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
        onesticks.innerHTML.disabled = "disabled";
        twosticks.innerHTML.disabled = "disabled";
        threesticks.innerHTML.disabled = disabled;
    }

}
function removeTwo() {
    numberOfSticks -= 2;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numberOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numberOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numberOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
    }
    
}
function removeThree() {
    numberOfSticks -= 3;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numberOfSticks + "</b> sticks in the pile currently";
    turn %= 2;
    turn++;
    if (numberOfSticks <= 0) {
        stickCount.innerHTML = "Player " + turn + " wins!!!";
    }
    if (numberOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    } else {
        turnCount.innerHTML = "";
    }
}
function resetGame() {
    numberOfSticks = 10;
    var stickCount = document.querySelector("#stickCount");
    var playerTurn = document.querySelector("#turnCount");
    stickCount.innerHTML = "There are <b>" + numberOfSticks + "</b> sticks in the pile currently";
    turn = 1;
    if (numberOfSticks > 0) {
        turnCount.innerHTML = "Player " + turn + " it is your turn";
    }
}
function navigateHome() {
    document.querySelector("#back")
}