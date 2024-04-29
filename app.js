let userseq = [];
let gameseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");



// Game starting point 
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;

        levelUp();
    }
});

// Button flash func
function gameFlash(btn) {
    btn.classList.add("gameFlash");

    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 250);
}

// game level up func 
function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;


    // random btn choose 
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);


    gameseq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){

    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelUp(),1000);
        }
    } else {
        h2.innerHTML=`Game over , Your score was ${level}! <br>press any key to start`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },150)
    }
}

// user btn press func 
function btnpress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}



// user flash 
function userFlash(btn) {
    btn.classList.add("userFlash");

    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}