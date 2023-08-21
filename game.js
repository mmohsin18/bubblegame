var timer = 30;
var score = 0;
var hitrun = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrun = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrun;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=140; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbot").innerHTML = clutter 
}

function endGame() {
        document.querySelector("#pbot").innerHTML = `Game Over<br>Score:<br><h1> ${score} </h1>`;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            endGame();
        }
    }, 1000);
}

function startGame() {
    getNewHit();
    makeBubble();
    runTimer();
    document.querySelector("#startButton").style.display = "none"; // Hide the button
}

document.querySelector("#startButton").addEventListener("click", startGame);

document.querySelector("#pbot").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrun) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

score();