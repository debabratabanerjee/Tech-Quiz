var readline = require ('readline-sync')

var score = 0;
var name = readline.question('Huraah,Welcome Lets get to know each other first. \nWhat is your name :')
  console.log("Hi,"+name+" Myself, Debabrata")
var greetings = readline.question('Lets play a techhi Quiz\n Type "yes" or "no" :')

if(greetings === "yes"){
  console.log("Cool of you to say yes.\n Here are some rules \n1)There will be 5 question of 1 point each.\n2)Don't worry no negative marking is there.\n3)There will be two option for each questions i.e. `a` and `b`   ")
}

function play(question,answer,trivia){
  var userAns =   readline.question(question);
  if(userAns===answer){
    score = score +1;
   console.log("Yes, thats great you are right")
  }
  else{
   console.log("Nope, sorry but thats not right") 
  }
  console.log(trivia)
  console.log("current score-------- :"+ score)
  
}

questions [{
  question:"What is being developed in Meta .\n a)Virtual "
}]