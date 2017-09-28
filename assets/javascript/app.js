$( document ).ready(function(){
$("#result").hide();
$("#mainbox").hide();  
$("#beginning").click(function(){
  $("#begin").hide();
  $("#mainbox").show();
  startTimer();  

})  

$("#again").click(function(){
  $("#answers").hide();
  $("#mainbox").show();
  score = 0;
  timer = duration;
  userInput = new Array();
  answers = new Array(10);

})


$("#done").click(function(){
  returnScore();
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

function stopTime(){

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
answers[2]='b'
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
  $("#mainbox").hide();

  $("#result").text("Your score is "+ getScore() +" out of "+ tot +"!");

}




});