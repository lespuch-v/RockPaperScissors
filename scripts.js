// Declaring variables. 
const btn = document.querySelectorAll(".btn")
const computerOutput = document.getElementById("computer")
const playerOutput = document.getElementById("player")
const choices = ["rock", "paper", "scissors"]
let cpuChouse = ""
let player = ""


// Get random choice!
let computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)]
}

// User choice and buttons
btn.forEach(item => {
    item.addEventListener("click", event => {
        if(event.target.classList.contains("rock")){
            player = "rock"
            cpuChouse = computerChoice() 
            computer.innerText = cpuChouse
            playerOutput.innerText = player
        }else if(event.target.classList.contains("paper")){
            player = "paper"
            cpuChouse = computerChoice()
            computer.innerText = cpuChouse 
            playerOutput.innerText = player
        }else if(event.target.classList.contains("scissors")){
            player = "scissors"
            cpuChouse = computerChoice()
            computer.innerText = cpuChouse 
            playerOutput.innerText = player
        }
        toVictory()
    })
})



// Evaluations WIN or LOSE
function toVictory(){
    console.log("clicked")
    if(player == "rock" && cpuChouse == "rock"){
        console.log("DRAW")
    }else if(player == "rock" && cpuChouse == "paper"){
        console.log("LOSt")
    }else if(player == "rock" && cpuChouse == "scissors"){
        console.log("WON")
    }
    
    else if(player == "paper" && cpuChouse == "paper"){
        console.log("DRAW")
    }else if(player == "paper" && cpuChouse == "rock"){
        console.log("WON")
    }else if(player == "paper" && cpuChouse == "scissors"){
        console.log("LOST")

    }else if(player == "scissors" && cpuChouse == "scissors"){
        console.log("DRAW")
    }else if(player == "scissors" && cpuChouse == "rock"){
        console.log("LOST")
    }else if(player == "scissors" && cpuChouse == "paper"){
        console.log("WON")
    }
}


// TODO: Game count - How many games played