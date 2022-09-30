'use strict';
const randomNumber = Math.floor(Math.random()*20 + 1);
let score = 20;
const newspaperSpinning = [
{ transform: "translate(1px, 1px) rotate(0deg)" },
{ transform: "translate(-1px, -2px) rotate(-1deg)" },
{ transform: "translate(-3px, 0px) rotate(1deg)" },
{ transform: "translate(3px, 2px) rotate(0deg)" },
{ transform: "translate(1px, -1px) rotate(1deg)" },
{ transform: "translate(-1px, 2px) rotate(-1deg)" },
{ transform: "translate(-3px, 1px) rotate(0deg)" },
{ transform: "translate(3px, 1px) rotate(-1deg)" },
{ transform: "translate(-1px, -1px) rotate(1deg)" },
{ transform: "translate(1px, 2px) rotate(0deg)" },
{ transform: "translate(1px, -2px) rotate(-1deg)" },
  ];
  
const newspaperTiming = {
    duration: 500,
    iterations: 1,
}
const body = document.querySelector("body");



function checkAnswer(){
    let inputValue = document.querySelector("input").value;
    if (Number(inputValue) < randomNumber) {
        document.getElementsByTagName("p")[1].textContent = "📉 Too Low";
        score--;
        document.getElementsByTagName("span")[0].textContent = score;
        body.animate(newspaperSpinning, newspaperTiming);
        
    }
    else if (Number(inputValue) > randomNumber){
        document.getElementsByTagName("p")[1].textContent = "📈 Too High";
        score--;
        document.getElementsByTagName("span")[0].textContent = score;
        body.animate(newspaperSpinning, newspaperTiming);
    }

    else{
        document.querySelector("body").style.backgroundColor="#60b347";
        document.getElementsByTagName("p")[1].textContent = "🎉 Correct Number";
        document.getElementsByTagName("span")[0].textContent = score;
        
    }
    console.log(randomNumber);
}
