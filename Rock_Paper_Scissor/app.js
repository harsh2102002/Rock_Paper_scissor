let userScore =0 ;
let compScore =0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock" , "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
};

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = `Game Draw , Play Again !! `;
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer Win.");
        msg.innerText = `Computer Win. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) =>{
    console.log("Use Choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice is " , compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ; 
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => { 
    //console.log(choice);
 choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    //console.log("choice was selected", userChoice);
    playGame(userChoice);
    });
});