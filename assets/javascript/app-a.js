
var totalQuestions=5

var rightChoices=[];
var wrongChoices=[];



var seconds_left = 40;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
       document.getElementById('timer_div').innerHTML = "Race is Over, Let's Check the Stats !!!";
       clearInterval(interval);
    }
}, 1000);















