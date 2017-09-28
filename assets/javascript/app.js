$( document ).ready(function(){

$("#mainbox").hide();

$("zbeginning").click(function(){

$("#begin").hide();
  $("#mainbox").show();
  startTime();

})

$("#done").click(function(){
  returnScore();
})

//Setting up the countdown timer
function startTime(duration, display) {
var count = 90;

function startTime(duration, display){
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

}

jQuery(function ($) {
    var fiveMinutes = 60 * 1.5,
        display = $('#timer');
    startTimer(fiveMinutes, display);
});


var userInput = new Array();
var answers = new Array(5);

answers[1]='c' //question 1 solution
answers[2]='b' //question 2 solution, and so on.
answers[3]='a'
answers[4]='d'
answers[5]='a'


tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=1; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  $("#answers").show();
  $("#box1").hide();

  $("#result").text("Your score is "+ getScore() +" out of "+ tot +".");

}







});


