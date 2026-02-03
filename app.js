let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" ,"purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
   if (started == false) {
     console.log("game is started")
     started = true;
   }

   levelup();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  },300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  },300);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randidx = Math.floor(Math.random() * 4);
  let randColor = btns[randidx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  
  
   
  gameFlash(randbtn);

}

function checkans(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 600);
    }
  } else {
    h2.innerHTML = `Game Over! Score: <b>${level}</b><br>Press any key to restart.`;

    // Use a class for the flash instead of direct style manipulation
    document.body.classList.add("game-over-flash");
    setTimeout(() => {
      document.body.classList.remove("game-over-flash");
    }, 200);

    reset();
  }
}


function btnpress() {
  
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkans(userseq.length-1);
  
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
  btn.addEventListener("click",btnpress)
}

function reset(params) {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        button.classList.add('active');
        
        setTimeout(() => {
            button.classList.remove('active');
        }, 200);
    });
});



