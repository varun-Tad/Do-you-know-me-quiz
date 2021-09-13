var readlineSync = require('readline-sync');
var score =0;
var userName = readlineSync.question("What is your name ? ");

console.log("Welcome " + userName + ", to DO YOU KNOW  Varun ? ");

//play function

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  {
    console.log("You are right! ");
    score= score+1;
  }
  else
  {
    console.log("You are wrong !");
  }

  console.log('Your  current score is ' + score);
  console.log("------------------");


}




//array of objects
var questions =[{
  question:"Where do i live ? ",
  answer: 'chennai'
},
{
  question:"My favourite superhero is ? ",  answer:"spiderman"
},
{
  question:"What is my favourite color?",
  answer: "red"
},
{
  question:"What is my favourite sport? ",
  answer:"Badminton",
},
{
  question:"What is my favourite book ? ",
  answer: "atomic habits",
}
];

for(var i=0;i<questions.length;i++)
{
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY, you scored "+ score);