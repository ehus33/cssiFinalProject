let clicks = 0;
document.getElementById('button').onclick = function() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}