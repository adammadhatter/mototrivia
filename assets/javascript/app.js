$( document ).ready(function(){
var totalQuestions=5
var choiceList=[];
var rightChoices=[];
var wrongChoices=[];
correctchoices[1]='c' 
correctchoices[2]='a' 
correctchoices[3]='c'
correctchoices[4]='c'
correctchoices[5]='c'

	// questions array//

  //ex. console.log(question.answer[0].correctAnswer
var questionsList = [
{
  question1:
  "1) Who is the manufacturer of the famous red dirtbikes known around the world?", 
  answers1:[
    {"a) Yamaha", "b) Kawasaki", "c) Honda", "d) Suzuki"}]
  correctAnswer1: "c) Honda"

  question2:
  "2) What is the name for the sport in which dirtbikes are raced?",
  answers2:[
    {"a) Supercross", "b) X-Games", "c) Dirtbiking", "d) BMX"}]
  correctAnswer2: "a) Supercross"
  
  question3:
  "3) What are the trademark colors of Austrian dirtbike manufacturer KTM?",
  answers3:[
  {"a) Red and White", "b) Blue and White", "c) Orange and Black", "d) Pink and Black"}]
  correctAnswer3: "c) Orange and Black"

  question4:
  "4) The tires of a dirtbike are loosely referred to as:",
  answers4:[
  {"a) Slicks", "b) Treads", "c) Knobbies", "d) Balloons"}]
  correctAnswer4: "c) Knobbies"
  
  question5:
  "5) What is the longest dirtbike jump on record?",
  answers5:[
  {"a) 300 yards", "b) 20 feet", "c) 394 feet", "d) 1000 feet"}]
  correctAnswer: "c) 394 feet"

  ]

};
 

  
  
  
   
 








 
 ];
var text="";
var q;
	// choices array //
var questionsList[0]=;
var questionsList[1]=;
var questionsList[2]=;
var questionsList[3]=;
var questionsList[4]=;

  // questions listing //
for(var q = 0; q < questionsList.length; q++) {
	text += questionsList[q] + "<br>"; 
  }
document.getElementById("questions").innerHTML = text;


	// countdown timer //
var seconds_left = 40;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
       document.getElementById('timer_div').innerHTML = "Race is Over, Let's Check the Stats !!!";
       clearInterval(interval);
    }
}, 1000);











