// Declaring variables.
const btn = document.querySelectorAll('.btn');
const computerOutput = document.getElementById('computer');
const playerOutput = document.getElementById('player');
const winEl = document.querySelectorAll('.win');
const loseEl = document.querySelectorAll('.lose');
const drawEl = document.querySelectorAll('.draw');
const countEl = document.querySelectorAll('.count');
const choices = ['rock', 'paper', 'scissors'];
const mainOutput = document.getElementById("output")
let cpuChouse = '';
let player = '';


// Results
let win = 0;
let lose = 0;
let draw = 0;
let count = 0;

// Get random choice!
let computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

// User choice and buttons
btn.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('rock')) {
      player = 'rock';
      cpuChouse = computerChoice();
      computer.innerText = cpuChouse;
      playerOutput.innerText = player;
    } else if (event.target.classList.contains('paper')) {
      player = 'paper';
      cpuChouse = computerChoice();
      computer.innerText = cpuChouse;
      playerOutput.innerText = player;
    } else if (event.target.classList.contains('scissors')) {
      player = 'scissors';
      cpuChouse = computerChoice();
      computer.innerText = cpuChouse;
      playerOutput.innerText = player;
    }
    toVictory();
  });
});

// Evaluations WIN or LOSE
function toVictory() {
    if(mainOutput.classList.contains("l")){
        mainOutput.classList.remove("l")
    }else if(mainOutput.classList.contains("r")){
        mainOutput.classList.remove("r")
    }else if(mainOutput.classList.contains("w")){
        mainOutput.classList.remove("w")
    }else if(mainOutput.classList.contains("d")){
        mainOutput.classList.remove("d")
    }


  console.log('clicked');
  if (player == 'rock' && cpuChouse == 'rock') {
    draw++;
    count++;
    mainOutput.innerText = "DRAW⚖️"
    mainOutput.classList.add("d")
  } else if (player == 'rock' && cpuChouse == 'paper') {
    lose++;
    count++;
    mainOutput.innerText = "LOST😭"
    mainOutput.classList.add("l")
  } else if (player == 'rock' && cpuChouse == 'scissors') {
    win++;
    count++;
    mainOutput.innerText = "WON🥳"
    mainOutput.classList.add("w")
  } else if (player == 'paper' && cpuChouse == 'paper') {
    draw++;
    count++;
    mainOutput.innerText = "DRAW⚖️"
    mainOutput.classList.add("d")
  } else if (player == 'paper' && cpuChouse == 'rock') {
    win++;
    count++;
    mainOutput.innerText = "WON🥳"
    mainOutput.classList.add("w")
  } else if (player == 'paper' && cpuChouse == 'scissors') {
    lose++;
    count++;
    mainOutput.innerText = "LOST😭"
    mainOutput.classList.add("l")
  } else if (player == 'scissors' && cpuChouse == 'scissors') {
    draw++;
    count++;
    mainOutput.innerText = "DRAW⚖️"
    mainOutput.classList.add("d")
  } else if (player == 'scissors' && cpuChouse == 'rock') {
    lose++;
    count++;
    mainOutput.innerText = "LOST😭"
    mainOutput.classList.add("l")
  } else if (player == 'scissors' && cpuChouse == 'paper') {
    win++;
    count++;
    mainOutput.innerText = "WON🥳"
    mainOutput.classList.add("w")
  }
  drawEl[0].innerText = `DRAW: ${draw}`;
  countEl[0].innerText = `COUNT: ${count}`;
  winEl[0].innerText = `WIN: ${win}`;
  loseEl[0].innerText = `LOSE: ${lose}`;
}

// TODO: Game count - How many games played
