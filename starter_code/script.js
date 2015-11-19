var userPoint = 0;
var aiPoint = 0;

function getAISelection() {
 var choose= ["rock", "paper", "scissors"]
 var random=Math.floor(Math.random() * choose.length)
 return choose[random]
 
}

// This function picks the winner
function pickWinner(uservalue,aivalue) {
    if(uservalue==aivalue){
    return "draw";
    }else if(uservalue=="rock"&& aivalue=="paper"){
    return "ai";
    }else if(uservalue=="paper"&& aivalue=="rock"){
    return"user";
    }else if(uservalue=="scissors"&& aivalue=="rock"){
    return"ai";
    }else if(uservalue=="paper"&&aivalue=="scissors"){
    return"ai";
    }else if(uservalue=="rock"&& aivalue=="scissors"){
    return"user";
    }else if(uservalue=="scissors"&& aivalue=="paper"){
    return"user";
    }
}
    //TODO: Add one point for the winner
// This function sets the scoreboard with the correct points
function setScore() {
    $("#userPoint").text(userPoint);
    $("#aiPoint").text(aiPoint);

}

// This function captures the click and picks the winner 
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) { 
        $('#message').delay(50).text('You have won!, Click a box to play again');
        userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
        aiPoint++;
    }
    setScore();
}

// This function runs on page load
$(document).ready(function(){
$(".token").click(function(evt){evaluate(evt);});
});
    


    







