const P1losses = document.getElementById("Player1losses")
const P1Wins = document.getElementById("Player1wins")
const P2rollbutton = document.getElementById("P-2rollbutton")
const P2Holdbutton = document.getElementById("P-2holdbutton")
const P1Holdbutton = document.getElementById("P-1holdbutton")
const P1score = document.getElementById("P-1Score")
const Dice = document.getElementById("Dice")
const P1rollbutton = document.getElementById("P-1rollbutton")
const P1winlose = document.getElementById("P-1WinLose")

let P1currentScore = 0
let P1currentWins = 0
let P1currentLosses = 0


P2rollbutton.style.display = "none"





function win_lose(){
    if (P1currentScore >= 21) {
        P1currentWins ++ 
        P1Wins.innerHTML = `${P1currentWins}`
        // P1winlose.innerHTML = "You Win!"
    }
    else 
    {
        P1currentLosses ++
        P1losses.innerHTML = `${P1currentLosses}`
        // P1winlose.innerHTML = "You Lose!"
    }
        
    
}


P1rollbutton.addEventListener("click", () =>{
    const roll_dice = Math.floor(Math.random() *6 + 1)
    Dice.src = `diceImages/dice${roll_dice}.png`
    if (roll_dice ==1) {
        win_lose()
        P1currentScore = 0
        // P1score.innerHTML = `${P1currentScore}`
        P1winlose.innerHTML = "You Lose!"

    }
    else if (roll_dice != 1){
        P1currentScore += roll_dice
        P1score.innerHTML = `${P1currentScore}`
    }
     if(P1currentScore >= 21 ) {
        win_lose()
        P1currentScore = 0
        // P1score.innerHTML = `${P1currentScore}`
        P1winlose.innerHTML = "You Win!"
    }
})


P1Holdbutton.addEventListener("click", () =>{
    if (P1rollbutton.style.display = "block"){
        P1rollbutton.style.display = "none"
        P2rollbutton.style.display = "block"
    }
  
})

 P2Holdbutton.addEventListener("click", () =>{
    if (P2rollbutton.style.display = "block"){
        P2rollbutton.style.display = "none"
        P1rollbutton.style.display = "block"
    }

})






