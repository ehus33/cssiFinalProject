var clicks = 0;
const onestick = document.querySelector("#one");
const twostick = document.querySelector("#two");
const threestick = document.querySelector("#three");
const button1 = document.quertySelector("#1");
const button2 = document.quertySelector("#2");
const button3 = document.quertySelector("#3");
const button4 = document.quertySelector("#4");
const button5 = document.quertySelector("#5");
const button6 = document.quertySelector("#6");
const button7 = document.quertySelector("#7");
const button8 = document.quertySelector("#8");
const button9 = document.quertySelector("#9");
const button10 = document.quertySelector("#10");
const button11 = document.quertySelector("#11");
const button12 = document.quertySelector("#12");
const button13 = document.quertySelector("#13");
const button14 = document.quertySelector("#14");
const button15 = document.quertySelector("#15");
const button16 = document.quertySelector("#16");
const button17 = document.quertySelector("#17");
const button18 = document.quertySelector("#18");
const button19 = document.quertySelector("#19");
const button20 = document.quertySelector("#20");

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

function newGame() {
    var number = generateNumber();
    var winnerDinner = document.querySelector("#winnerDinner");
    if(document.getElementById("" + number).clicked == true) {
        winnerDinner.innerHTML = "You guessed it!!!";
    } else {
        winnerDinner.innerHTML = "Sorry! The number was " + number;
    }

}
function generateNumber() {
    return Math.floor(Math.random * 20) + 1;
}