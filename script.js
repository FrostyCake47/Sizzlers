const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const output = document.getElementById("output");
const quest = document.getElementById("quest");
var userChoice = -1;


buttonListeners(){
    button1.addEventListener("click", function() {
        output.textContent = ans;
        userChoice = 1;
    
    });
    
    button2.addEventListener("click", function() {
        output.textContent = "Value: Button 2 Clicked";
        userChoice = 2;
    });
    
    button3.addEventListener("click", function() {
        //output.textContent = "Value: Button 3 Clicked";
        userChoice = 3;
    });
    
    button4.addEventListener("click", function() {
        //output.textContent = "Value: Button 4 Clicked";
        userChoice = 4;
    });
    
}


function checkAns(userChoice, ans){
    if (userChoice == -1) {
        output.textContent = "Click a choice";
    }
    else if (userChoice == ans){
        output.textContent = "Viola right ans";
        console.log("cmon");
    }
    else {
        output.textContent = "Wrong ans beech";
    }
}

function main(){
    const questData = ["elo whats my name", "idk", "gae", "aman", "aaa", 4];
    var ans = questData[4];
    quest.textContent = questData[0];
    button1.textContent = questData[1];
    button2.textContent = questData[2];
    button3.textContent = questData[3];
    button4.textContent = questData[4];

    buttonListeners();
    checkAns(userChoice, ans);
}

main();