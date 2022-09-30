'use strict';
const randomNumber = Math.floor(Math.random()*21);
let score = 20;




function checkAnswer(){
    let inputValue = document.querySelector("input").value;
    if (Number(inputValue) < randomNumber) {
        document.getElementsByTagName("p")[1].textContent = "📉 Too Low";
        score--;
        document.getElementsByTagName("span")[0].textContent = score;
    }
    else if (Number(inputValue) > randomNumber){
        document.getElementsByTagName("p")[1].textContent = "📈 Too High";
        score--;
        document.getElementsByTagName("span")[0].textContent = score;
    }

    else{
        document.querySelector("body").style.backgroundColor="#60b347";
        document.getElementsByTagName("p")[1].textContent = "🎉 Correct Number";
        document.getElementsByTagName("span")[0].textContent = score;
        
    }
    console.log(randomNumber);
}
