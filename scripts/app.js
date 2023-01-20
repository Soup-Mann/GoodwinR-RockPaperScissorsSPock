// let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
// let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
getData()
// let  = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");


let AddTwoReturn = document.getElementById("AddTwoReturn");
let AddTwoBut = document.getElementById("AddTwoBut");

let savedInput = "";
let savedInputTwo = "";
let AddTwoUrl = "";
let response = "";
let injectHere = document.getElementById("injectHere");
let injectHere2 = document.getElementById("injectHere2");
let injectHere3 = document.getElementById("injectHere3");
let injectHere4 = document.getElementById("injectHere4");
let injectHere5 = document.getElementById("injectHere5");
let injectAnswer = document.getElementById("injectAnswer");
let injectScore = document.getElementById("injectScore");
let injectChoices = document.getElementById("injectChoices");
let injectRes = document.getElementById("injectRes");
let cpuWin = 0;
let youWin = 0;

// item1.addEventListener("click", function(){ 
//     //this will do something
// let h1 = document.createElement("h1");
// injectHere.appendChild(h1);
// h1.textContext = "my name is...";
// } )

gameMode1 = 1;
gameMode3 = 3;
gameMode5 = 4;


let modeBtn;
let cpuResponse;
let bestOf1;
let playerAns = "";
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    clearScreen()
    BringUrBtns2()
    clearscore()
    RestartBtns()
    buttonBGone()
    buttonBGone2()
    buttonBGone3()
})
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
 clearScreen()
 clearscore()
 BringUrBtns3()
 RestartBtns()
    
 buttonBGone()
 buttonBGone2()
 buttonBGone3()
})

function refresh(){
    window.location.reload();
}

function buttonBGone(){
item2.outerHTML = "";
}

function buttonBGone2(){
btn.outerHTML = "";
}
function buttonBGone3(){
btn2.outerHTML = "";
}

function compare(){
    getData()
    
    if(
        ( playerAns == "Rock" && cpuResponse == "Scissors")||
        ( playerAns == "Rock" && cpuResponse == "Lizard")||
    (playerAns == "Paper" && cpuResponse == "Rock")||
    ( playerAns == "Paper" && cpuResponse == "Spock")||
    (playerAns === "Scissors" && cpuResponse === "Paper")||
    ( playerAns == "Scissors" && cpuResponse == "Lizard")||
    (playerAns === "Lizard" && cpuResponse === "Spock")||
    ( playerAns == "Lizard" && cpuResponse == "Paper")||
    (playerAns === "Spock" && cpuResponse === "Rock")||
    ( playerAns == "Spock" && cpuResponse == "Scissors")

    ){
        console.log("You Win")
        youWin++;
        console.log("You: " + youWin);
        console.log("cpu: " + cpuWin);
    }else if(playerAns == cpuResponse){
console.log("You tied!")
    }else{
        cpuWin++;
        console.log("You: " + youWin);
        console.log("cpu: " + cpuWin);

        console.log("You Lose, GO AWAY!");

    }
    clearscore()
    score()
     choice()
     

    }

    function checkWinner1(){
        if(youWin == gameMode1){
            winner()
            // score()
            // choice()
            console.log("You won best of 1");
            clearScreen()
        }else if(cpuWin == gameMode1){
            loser()
            // score()
            // choice()
            console.log("You lost best of 1");
            clearScreen()
        }
    }
    
    function checkWinner3(){
        if(youWin == gameMode3){
            winner()
            console.log("You won best of 5");
            clearScreen()
        }else if(cpuWin == gameMode3){
            loser()
           
            console.log("You lost best of 5");
            clearScreen()
        }
    }

    function checkWinner5(){
        if(youWin == gameMode5){
            winner()
            
            console.log("You won best of 7");
            clearScreen()
        }else if(cpuWin == gameMode5){
            loser()
            
            console.log("You lost best of 7");
            clearScreen()
        }
        
    }
    
    
    
    
    setTimeout(() => console.log(cpuResponse), 50);
    
    
    console.log(cpuResponse);
    
    function getData() {
        fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(response => response.text()).then(data => {
            cpuResponse = data
    });
}


item2.addEventListener("click", function(){
    //this will do something
    buttonBGone()
    buttonBGone2()
    buttonBGone3()
    RestartBtns()
    clearScreen()
    BringUrBtns()
    clearscore()
} )


item4.addEventListener("click", function(){
    //this will do something
    clearScreen()

    refresh()

} )

function clearScreen(){
    injectHere.innerHTML = "";
    injectHere2.innerHTML = "";
    injectHere3.innerHTML = "";
    injectHere4.innerHTML = "";
    injectHere5.innerHTML = "";
}




function clearscore()
{

    injectChoices.innerHTML = "";
    injectScore.innerHTML = "";
}
function winner(){
let winText = document.createElement("winText");
winText.className = "font8";
winText.type = "h3";
winText.innerHTML = "You were first to " + youWin;

injectAnswer.appendChild(winText);
}

function loser(){
    let lossText = document.createElement("lossText");
    lossText.className = "font8";
    lossText.type = "h3";
    lossText.innerHTML = "They were first to " + cpuWin;
    
    injectAnswer.appendChild(lossText);
    }

function score(){
 let scoreText = document.createElement("ScoreText");
scoreText.className = "font8";
 scoreText.type = "p";
 scoreText.innerHTML = "Your Score: " + youWin + "!\n--------\n  Cpu's score: " + cpuWin + "!";
        
 injectScore.appendChild(scoreText);
  }

  function choice(){
    let choiceText = document.createElement("choiceText");
    choiceText.className = "font8";
    choiceText.type = "p";
    choiceText.innerHTML = "You chose: " + playerAns + "!\n--------\n   Cpu Chose: " + cpuResponse + "!";
           
    injectChoices.appendChild(choiceText);
     }
           
   
   
        
     function RestartBtns(){
        let resBtn = document.createElement("button");
        resBtn.type = "button";
        resBtn.className = "btn btn-primary font8";
        resBtn.textContext = "Res";
        resBtn.innerHTML = "Restart"
        
        
        resBtn.addEventListener("click", function(){
           refresh()
    })
    injectRes.appendChild(resBtn);

     }






//THis is the button function
function BringUrBtns(){
    let rockBtn = document.createElement("button");
    rockBtn.type = "button";
    rockBtn.className = "btn btn-primary font8";
    rockBtn.textContext = "Rock";
    rockBtn.innerHTML = "Rock"
    
    
    rockBtn.addEventListener("click", function(){
        playerAns = "Rock";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
    compare()
    checkWinner1()
})


injectHere.appendChild(rockBtn);
// injectAnswer.textContent(playerAns);
// injectAnswer.appendChild("");


//Paper
let paperBtn = document.createElement("paperBtn");
paperBtn.className = "btn btn-primary font8";
paperBtn.textContext = "Button";
paperBtn.innerHTML = "Paper"

paperBtn.addEventListener("click", function(){
    playerAns = "Paper";
    console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
    compare()
    checkWinner1()
})



injectHere2.appendChild(paperBtn);



//SCissors
let scissorsBtn = document.createElement("scissorsBtn");
scissorsBtn.className = "btn btn-primary font8";
scissorsBtn.textContext = "Button";
scissorsBtn.innerHTML = "Scissors"

scissorsBtn.addEventListener("click", function(){
    playerAns = "Scissors";
    console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
    compare()
    checkWinner1()
})


injectHere3.appendChild(scissorsBtn);


let lizardBtn = document.createElement("lizardBtn");
lizardBtn.className = "btn btn-primary font8";
lizardBtn.textContext = "Button";
lizardBtn.innerHTML = "Lizard"

lizardBtn.addEventListener("click", function(){
    playerAns = "Lizard";
    console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
    compare()
    checkWinner1()
})


injectHere4.appendChild(lizardBtn);



let spockBtn = document.createElement("spockBtn");
spockBtn.className = "btn btn-primary font8";
spockBtn.textContext = "Button";
spockBtn.innerHTML = "Spock"

spockBtn.addEventListener("click", function(){
    playerAns = "Spock";
    console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
    compare()
    checkWinner1()
})



injectHere5.appendChild(spockBtn);


}


//THis is the button function
function BringUrBtns2(){
    let rockBtn2 = document.createElement("button");
    rockBtn2.type = "button";
    rockBtn2.className = "btn btn-primary font8";
    rockBtn2.textContext = "Rock";
    rockBtn2.innerHTML = "Rock"
    rockBtn2.id = "rockBtn2";
    
    
    rockBtn2.addEventListener("click", function(){
        playerAns = "Rock";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner3()
    })
    
    
    injectHere.appendChild(rockBtn2);
    
    
    
    //Paper
    let paperBtn2 = document.createElement("paperBtn2");
    paperBtn2.className = "btn btn-primary font8";
    paperBtn2.textContext = "Button";
    paperBtn2.innerHTML = "Paper"
    
    paperBtn2.addEventListener("click", function(){
        playerAns = "Paper";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner3()
    })
    
    
    
    injectHere2.appendChild(paperBtn2);
    
    
    
    //SCissors
    let scissorsBtn2 = document.createElement("scissorsBtn2");
    scissorsBtn2.className = "btn btn-primary font8";
    scissorsBtn2.textContext = "Button";
    scissorsBtn2.innerHTML = "Scissors"
    
    scissorsBtn2.addEventListener("click", function(){
        playerAns = "Scissors";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner3()
    })
    
    
    injectHere3.appendChild(scissorsBtn2);
    
    
    let lizardBtn2 = document.createElement("lizardBtn2");
    lizardBtn2.className = "btn btn-primary font8";
    lizardBtn2.textContext = "Button";
    lizardBtn2.innerHTML = "Lizard"
    
    lizardBtn2.addEventListener("click", function(){
        playerAns = "Lizard";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner3()
    })
    
    
    injectHere4.appendChild(lizardBtn2);
    
    
    
    let spockBtn2 = document.createElement("spockBtn2");
    spockBtn2.className = "btn btn-primary font8";
    spockBtn2.textContext = "Button";
    spockBtn2.innerHTML = "Spock"
    
    spockBtn2.addEventListener("click", function(){
        playerAns = "Spock";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner3()
    })
    
    
    
    injectHere5.appendChild(spockBtn2);
    
    }


    
//THis is the button function
function BringUrBtns3(){
    let rockBtn3 = document.createElement("button");
    rockBtn3.type = "button";
    rockBtn3.className = "btn btn-primary font8";
    rockBtn3.textContext = "Rock";
    rockBtn3.innerHTML = "Rock"
    rockBtn3.id = "rockBtn3";
    
    
    rockBtn3.addEventListener("click", function(){
        playerAns = "Rock";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner5()
    })
    
    
    injectHere.appendChild(rockBtn3);
    
    
    
    //Paper
    let paperBtn3 = document.createElement("paperBtn2");
    paperBtn3.className = "btn btn-primary font8";
    paperBtn3.textContext = "Button";
    paperBtn3.innerHTML = "Paper"
    
    paperBtn3.addEventListener("click", function(){
        playerAns = "Paper";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner5()
    })
    
    
    
    injectHere2.appendChild(paperBtn3);
    
    
    
    //SCissors
    let scissorsBtn3 = document.createElement("scissorsBtn3");
    scissorsBtn3.className = "btn btn-primary font8";
    scissorsBtn3.textContext = "Button";
    scissorsBtn3.innerHTML = "Scissors"
    
    scissorsBtn3.addEventListener("click", function(){
        playerAns = "Scissors";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner5()
    })
    
    
    injectHere3.appendChild(scissorsBtn3);
    
    
    let lizardBtn3 = document.createElement("lizardBtn3");
    lizardBtn3.className = "btn btn-primary font8";
    lizardBtn3.textContext = "Button";
    lizardBtn3.innerHTML = "Lizard"
    
    lizardBtn3.addEventListener("click", function(){
        playerAns = "Lizard";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner5()
    })
    
    
    injectHere4.appendChild(lizardBtn3);
    
    
    
    let spockBtn3 = document.createElement("spockBtn3");
    spockBtn3.className = "btn btn-primary font8";
    spockBtn3.textContext = "Button";
    spockBtn3.innerHTML = "Spock"
    
    spockBtn3.addEventListener("click", function(){
        playerAns = "Spock";
        console.log("You chose " + playerAns + " The cpu chose " + cpuResponse);
        compare()
        checkWinner5()
    })
    
    
    
    injectHere5.appendChild(spockBtn3);
    
    }

    // let rockBtn = document.createElement("button");
    // rockBtn.className = "btn btn-primary";
    // rockBtn.type = "button";
    // rockBtn.textContext = "Rock";
    // // rockBtn.innerHTML = "Rock";
    // rockBtn.id = "rockBtn";
    
    


// rockBtn.addEventListener("click", function(){
//     playerAns = "Rock";
//     console.log("rock");


// })
    


/////THIS IS THE BEGINNING OF THE PLAYER VS PLAYER SECTION






