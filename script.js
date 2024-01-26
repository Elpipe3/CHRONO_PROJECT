const numbers = document.getElementById("stopwatch");
const startPauseButton = document.getElementById("play-pause");
const circle= document.getElementById("sphere");

let stopwatchInterval;
let runninTime = 0;