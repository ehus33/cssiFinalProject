const now = new Date();
let target = new Date(now.getFullYear(), 11, 25, 0, 0, 0, 0).getTime();
if (target - now.getTime < 0) {
    target = target + 86400000;
}

let update = setInterval(function () {
    const currentTime = new Date().getTime()
    const distance = target - currentTime

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s";
}, 1000);