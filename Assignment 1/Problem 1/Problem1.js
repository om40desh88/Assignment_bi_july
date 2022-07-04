(function showdate() {
    var newdate = new Date()
    var date = document.getElementById("date").innerText = newdate.toLocaleDateString()
})()

function showtime() {
    var updtime = new Date();
    var hours = updtime.getHours();
    var minutes = updtime.getMinutes()
    var seconds = updtime.getSeconds()
    var session = 'AM'

    if (hours == 0) {
        hours = 12
    }
    else if (hours > 12) {
        session = 'PM'
        hours = hours - 12
    }
    hours = hours < 10 ? 0 + "" + hours : hours;
    minutes = minutes < 10 ? 0 + "" + minutes : minutes;
    seconds = seconds < 10 ? 0 + "" + seconds : seconds;

    var finaltime = hours + ":" + minutes + ":" + seconds + " " + session
    var timetime = document.getElementById("time").innerHTML = finaltime


}
showtime()
var intervalref;
var bu = document.getElementById("btnstart")
bu.addEventListener("click", starting)
function starting() {
    intervalref = setInterval(showtime, 1000)
}
var bu2 = document.getElementById("btnstop")
bu2.addEventListener("click", stoping)
function stoping() {
    intervalref = clearInterval(intervalref)
}