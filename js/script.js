let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let clearButton = document.getElementById('clear');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');

let sec = 0;
let min = 0;
let hrs = 0;
let timer = 0;

startButton.addEventListener('click', function() {
    timer = setInterval(function() {
        sec = sec + 1;
        if (sec < 10) {
            seconds.innerHTML = '0' + sec;
        } else if (sec == 60) {
            seconds.innerHTML = "00";
        } 
        else {
            seconds.innerHTML = sec;
        }
        
        if (sec === 60) {
            sec = 0;
            min = min + 1;
            if (min < 10) {
                minutes.innerHTML = '0' + min;
            } else if (min == 60) {
                minutes.innerHTML = "00";
            } else {
                minutes.innerHTML = min;
            }
        }

        if (min === 60) {
            min = 0;
            hrs = hrs + 1;
            if (hrs < 10) {
                hours.innerHTML = '0' + hrs;
            } else if (hrs == 60) {
                hours.innerHTML = "00";
            } else {
                hours.innerHTML = hrs;
            }
        }
    }, 10);
});

pauseButton.addEventListener('click', function() {
    clearInterval(timer);
});

clearButton.addEventListener('click', function() {
    sec = 0;
    min = 0;
    hrs = 0;

    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";

    clearInterval(timer);
});