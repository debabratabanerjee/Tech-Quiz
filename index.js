var readline = require ('readline-sync');
const chalk = require ('chalk');


var score = 0;
var name = readline.question('Huraah,Welcome Lets get to know each other first. \nWhat is your name :')
  console.log("Hi,"+chalk.bgBlue(name)+" Myself,", chalk.blue("Debabrata"))
greetings = readline.question('Lets play a techhi Quiz\nIt will have a question along with options to choose\nfrom and'+chalk.bgGreen( ' TRIVIA ')+ 'for each:\nType "yes" or "no" :',{
  trueValue:['yeah', 'yes'],
  falseValue:['nope','no'] 
});

if(greetings === true){
  console.log("Cool of you to say yes.\n Here are some rules \n1)There will be 4 question of 1 point each.\n2)Don't worry no negative marking is there.\n3)There will be two option for each questions i.e. `a` and `b`\n")
}

else if (greetings === false){
  console.log("Arre chillax, questions ar trivial\n Here are some rules \n1)There will be 5 question of 1 point each.\n2)Don't worry no negative marking is there.\n3)There will be two option for each questions i.e. `a` and `b`\n")
}

function play(question,options,answer,trivia){
  console.log(chalk.red("Give ans as `a` or `b`\n"+question));
  var userAns = readline.question(chalk.cyan(options));
  // console.log(chalk.yellow(options));
  if(userAns===answer){
    score = score +1;
   console.log(chalk.bgGreen("Yes, thats great you are right\n"))
  }
  else{
   console.log(chalk.bgRed("Nope, sorry but thats not right\n")) 
  }
  console.log("Trivia : "+chalk.inverse(trivia)+"\n");
  
}

var questions = [{
  question:"1)In which field Meta is working:\n  ",
  options: "a)Virtual Reality\nb)Block Chain\n Answer :",
  answer : 'a',
  trivia :"Facebook already has its own in-house product — the Oculus VR headset after it acquired the company for USD 2 billion in 2014. So its a better opputunity for them to grow." 
},
{
  question:"2)When was Bitcoin Cryptocurrency invente :\n  ",
  options: "a)2008\nb)2007\n Answer :",
  answer : 'a',
  trivia :"The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software." 
},
{
  question:"3)Why PUBG was banned in India\n  ",
  options: "a)India did't like the User Interface\nb)Privacy concern & increasing addiction in cildren for the game\n Answer :",
  answer : 'b',
  trivia :"PUBG and similar apps were last year banned by the Indian government for concerns relating to national security and data privacy breaches, besides issues of addiction in children, monetary loss, self harm, suicides and murders.." 
},
{
  question:"4)What is the new feature added in twitter\n",
  options: "a)Twitter Has Added A New Search Button That Helps Find Specific Tweets From Specific Users\nb)Twitter Has Added Added A New VR Engine to show objects in a 3D shape\n Answer :",
  answer: 'a',
  trivia :"Yeah, its true twitter new button addition help to get precise tweets from search box."
}

]

for(var i = 0; i<questions.length; i++){
  var cQ = questions[i];
  play(cQ.question,cQ.options, cQ.answer, cQ.trivia)
}

function percentage(per,num){
  return(per/num)*100;
}

console.log("Final Score ------->"+score+" \n so gave "+percentage(score,questions.length))+" percent correct answer.";

if(score<2){
  var chance = readline.question('You did not do so well do you want to give another try.\nType "yes" or "no" :',{
  trueValue:['yeah', 'yes'],
  falseValue:['nope','no'] 
});

  if (chance ===true){
    for(var i = 0; i<questions.length; i++){
  var cQ = questions[i];
  play(cQ.question,cQ.options, cQ.answer, cQ.trivia)
}
  };
}
else{
  console.log("Ok, no worries , Play it another time. See ya!!!")
}