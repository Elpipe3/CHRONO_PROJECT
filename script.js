const numbers = document.getElementById("stopwatch");
const startPauseButton = document.getElementById("play-pause");
const circle= document.getElementById("sphere");

let stopwatchInterval;
let runningTime = 0;
const playPause = () => {
    const isPaused = !startPauseButton.classList.contains("running");
        
     if (isPaused) {
            startPauseButton.classList.add("running");
            start();
     }else{
        startPauseButton.classList.remove("running");
            pause();
     }
}
const pause = () => {
    sphere.style.animationPlayState = "paused";
    clearInterval(stopwatchInterval);
}


const stop = () => {
    sphere.style.transform = "rotate(-90deg) translateX(60px)";
    sphere.style.animation = "none";
    startPauseButton.classList.remove("running");
    runningTime = 0;
    clearInterval(stopwatchInterval);
    numbers.textContent = "00:00"; 

}

const start = () => {
    sphere.style.animation = "rotacion 60s linear infinite";
    let starTime = Date.now() - runningTime;
    sphere.style.animationPlayState = "running";      
    stopwatchInterval = setInterval (() => {
        runningTime = Date.now() - starTime;
        numbers. textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
const total_seconds = Math.floor (runningTime / 1000);
const total_minutes = Math.floor (total_seconds / 60);

const display_seconds = (total_seconds %60).toString().padStart(2,"0");
const display_minutes = total_minutes.toString().padStart(2,"0");

return `${display_minutes}:${display_seconds}`

}