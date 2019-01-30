let start = document.getElementById('start'),
stop = document.getElementById('stop'),
reset = document.getElementById('reset'),
h1 = document.getElementsByTagName('h1')[0],
seconds = 0,
minutes = 0,
hours = 0,
timeOut;

const count = () => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

h1.textContent = (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)

timer();

};

const timer = () => {
     timeOut = setTimeout(count, 1000);
};

start.onclick = timer;

stop.onclick = function() {
    clearTimeout(timeOut);
};

reset.onclick = function() {
    h1.textContent = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
};

