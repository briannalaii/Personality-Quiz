/*Add your JavaScript here*/

//set the variables to zero
var darkScore = 0;
var cottageScore = 0;
var questionCount = 0;

//get element by id stuff
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//add event listeners
q1a1.addEventListener("click", cottage);
q1a2.addEventListener("click", dark);

q2a1.addEventListener("click", cottage);
q2a2.addEventListener("click", dark);

q3a1.addEventListener("click", cottage);
q3a2.addEventListener("click", dark);

restart.addEventListener("click", restartQuiz);

//functions
function dark(){
  darkScore += 1;
  questionCount += 1;

  console.log("questionCount" + questionCount + " darkScore = " + darkScore);
if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
}  
}

function cottage(){
  cottageScore += 1;
  questionCount += 1;

  console.log("questionCount" + questionCount + " cottageScore = " + cottageScore);

  if (questionCount == 3){
  console.log("The quiz is done!")
    updateResult();
} 
}

//update quiz result
function updateResult() {
  if (darkScore >= 2){
    result.innerHTML = "You are dark academia!";
  console.log("You are dark academia!");
} else if (cottageScore >= 2){
    result.innerHTML = "You are cottagecore!";
  console.log("You are cottagecore!");
}
}

//restart quiz
function restartQuiz() {
  result.innerHTML = "You are...";
  questionCount = 0;
  darkScore = 0;
  cottageScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "cottageScore = " + cottageScore + "\t" + "darkScore = " + darkScore);
  enableQuestions(); }