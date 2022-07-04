var min = 00;
var sec = 00;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var startbutton = document.getElementById("start");
var stopbutton = document.getElementById("stop");
var resetbutton = document.getElementById("reset");


var interval;
function starttimer() {
    min++;
    sec++;
    if (min < 9) {
        minutes.innerHTML = "0" + min + ":";
    }
    if (min > 9) {
        minutes.innerHTML = min + ":";

    }
    if (min > 99) {
        sec++
        seconds.innerHTML = "0" + sec
        min = 0
        minutes.innerHTML = "0" + 0;
    }
    if (sec > 9) {
        seconds.innerHTML = sec;
    }
    if (sec > 99) {
        min++
        minutes.innerHTML = "0" + min
        sec = 0
        seconds.innerHTML = "0" + 0;
    }
}
startbutton.onclick = function () {
    interval = setInterval(starttimer, 300)
}
stopbutton.onclick = function () {
    clearInterval(interval)
}
resetbutton.onclick = function () {
    clearInterval(interval)
    min = 00;
    sec = 00;
    minutes.innerText = min + "0" + ":";
    seconds.innerHTML = sec + "0";
}