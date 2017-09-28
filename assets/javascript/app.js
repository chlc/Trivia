//Setting up the countdown timer

var count = 90;

var gameTime = setInterval("counter()", 1000);

function convertSeconds(s){
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ":" + sec;
}

function counter(){
count--;
$("#timer").text(convertSeconds(count));
if (count === 0) {
    clearInterval(gameTime);
} else {
    //Do nothing
}
}






