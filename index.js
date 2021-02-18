let hours = 0;
let minites = 0;
let seconds = 0;
let interval;

let timeCounter = document.getElementById("timeCounter");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let stopButton = document.getElementById("stop");

function timeIntilizer(){
    seconds++;
    if(seconds/60==1){
        seconds = 0;
        minites++;
    }
    if(minites/60==1){
        minites = 0;
        hours++;
    }
    let h,m,s;
    if(seconds<10){
        s = "0"+seconds;
    }
    else{
        s = seconds;
    }
    if(minites<10){
        m = "0" + minites;
    }
    else{
        m = minites;
    }
    if(hours<10){
        h = "0"+hours;
    }
    else{
        h = hours;
    }
    timeCounter.innerHTML = `${h}:${m}:${s}`
}
function startWatch(){
     seconds = 0;
     minites = 0;
     hours = 0;
     interval = setInterval(timeIntilizer,1000);
     startButton.disabled = true;
     pauseButton.disabled = false;
     stopButton.disabled = false;
}

function pauseWatch(){
    let buttonInterValue = pauseButton.innerHTML;
    if(buttonInterValue==="pause"){
        clearInterval(interval);
        pauseButton.innerHTML = "continue";
    }
    else{
          pauseButton.innerHTML = "pause";
          interval = setInterval(timeIntilizer,1000)
    }
}
function stopWatch(){
    timeCounter.innerHTML = "00:00:00"
    clearInterval(interval);
    stopButton.disabled = true;
    pauseButton.disabled = true;
    startButton.disabled = false;
    if(pauseButton.innerHTML=="continue"){
        pauseButton.innerHTML = "pause";
    }
}