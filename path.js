let userScore=0;
let compScore=0;
// accessing the choices
const choices=document.querySelectorAll(".choice");
// AT LAST ACCESSING MESSAGE PARAGRAPH
const msg=document.querySelector("#msg");
const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");
// we will maintain playgame function which maintaines computer choice

const getCompChoice=()=> {
    const options=["rock","paper","scissors"];
    //here random function is available but it generates only number and our requirement is string . 
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawgame=()=>{
console.log("game is draw.TRY AGAIN !");
msg.innerText="Game is Draw.";
msg.style.backgroundColor="#081b31";
};
// disable game
const disableGame = () => {
  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
  retryBtn.style.display = "inline-block";
};
// retry button
retryBtn.addEventListener("click", () => {
  location.reload(); // Refreshes the page and restarts the game
});
const ShowWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScoreP.innerText=userScore;
        console.log(`you win!`);
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        if(userScore===5){alert("🌟 you win the game! 🌟")}
    }
    else {console.log(`you lose!`);msg.innerText=`You loose! ${compChoice} beats your ${userChoice}`;msg.style.backgroundColor="red";
    compScore++;
    compScoreP.innerText=compScore;
    if(compScore===5){alert("😥 you lose the game! 😥 ")
}
}};
const playgame = (userChoice) => {
    if (userScore >= 5 || compScore >= 5) return;
    if(userScore===5 || compScore===5){disablegame();}
    console.log("user choice= ", userChoice);
    // now generating computer choice 
    const compChoice= getCompChoice();
    console.log("computer choice= ",compChoice);
    
    // writing the game logic
    if(userChoice==compChoice){
        //DRAW GAME
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            //scissors or paper
            userwin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock or scissors 
            userwin = compChoice==="scissors" ? false : true;
        }
        else{
            //paper or rock
            userwin = compChoice==="rock" ? false : true;
        }
        ShowWinner(userwin,userChoice,compChoice);
    } 
};
choices.forEach((choice)=>{
//    console.log(choice);--> from this comment we can list choices 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});