const clock=document.getElementById("clock");
const laps = document.getElementById("laps");
let timer=null;
let starttime=0;
let elapsedtime=0;
let running=false;
let lapCount = 0;

function startTimer(){
    if(!running){
        starttime=Date.now()-elapsedtime;
        timer=setInterval(update,10);
        running=true;
    }
}
function stopTimer(){
    if(running){
clearInterval(timer);
elapsedtime=Date.now()-starttime;
running=false;
}
}
function resetTimer(){
    clearInterval(timer);
    starttime=0;
 elapsedtime=0;
 running=false;
 clock.textContent="00:00:00"
    
}
function update(){

    const currenttime=Date.now();
    elapsedtime=currenttime-starttime;
    let hours=Math.floor(elapsedtime/(1000*60*60));
    let minutes=Math.floor(elapsedtime/(1000*60)%60);
    let seconds=Math.floor(elapsedtime/1000%60);
    let milliseconds=Math.floor((elapsedtime%1000)/10);
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
   clock.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function lapTimer() {
    if (!running) return;

    lapCount++;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount} - ${clock.textContent}`;
    laps.appendChild(li);
}