var readLineSync = require('readline-sync');
var chalk = require('chalk');
// maintaing a players list, to track ranking(in pregress)
let playerList = [
  player = {},  //storing player details in these objects
]
// maintaing a scorelist of high scorer players(static(in progress)) 
let scoreList = [
  raven = {score:3,},
  ghost = {score:2,},
]
// maintaining a quizset of questions with their options and answers
let quizSet_level01 = [
  set1 = {
    question:"Where is John snow from?",
    options:"1.Landing\n2.Winterfell\n3.Dragonstone\n",
    answer: 2,
  },
  set2 = {
    question:"Where is Denerys from?",
    options:"1.Winterfell\n2.Landing\n3.Dragonstone\n",
    answer: 3,
  
  },
  set3 = {
    question:"Where is Daario Naharis from?",
    options:"1.Khal\n2.Tyrosh\n3.landing\n",
    answer: 2,  
  },
  set4 = {
    question:"Where is Robert Baratheon from?",
    options:"1.Khal\n2.Storm's End\n3.landing\n",
    answer: 2,  
  },
  set5 = {
    question:"Where is Khal Drogo from?",
    options:"1.Vaes Dothrak\n2.Storm's End\n3.landing\n",
    answer: 1,  
  },
] 

let quizSet_level02 = [
  set1 = {
    question:"What is the giant wall made of?",
    options:"1.Stone\n2.Wood\n3.Ice\n",
    answer: 3,
  },
  set2 = {
    question:"Who defend the wall?",
    options:"1.Brothers of Night Watch\n2.Wilding\n3.Soldiers of kings landing\n",
    answer: 1,
  },
  set3 = {
    question:"Who lives beyond the wall?",
    options:"1.Brothers of night watch\n2.Winterfell citizens\n3.Wilding\n",
    answer: 3,
  },
  
]
let quizSet_level03 = [
  set1 = {
    question:"Which of the following is one of the OST in GOT? ",
    options:"1.Little Child\n2.Day & Light\n3.Light of Seven\n",
    answer: 3,
  },
  set2 = {
    question:"Rains of...?",
    options:"1.Night Watch\n2.Castamere\n3.kings landing\n",
    answer: 2,
  },  
]

// ready variable to check if player wants to continue or not?
let ready = true;
// getting highscorer player in a variable to  compare it later
let highScorer = scoreList[0];
// maintaining level
let level = 1;
// maintaining quizSet according to level
let quizset = "";
// function to accept user details
function acceptPlayerDetails(){
  console.log(chalk.bgBlue("Welcome to Game of thrones Quiz!!!"));
  var playerName = readLineSync.question("Player name: ");
  // pushing this player into player list MANUALLY
  playerList[0].name = playerName;
  playerList[0].score = 0;

}
// function to print player's score and check if the player beats the high score or not?
function printScore(player, quizSet){
  
  console.log("\nLevel ended\nScore: "+player.score);
  

  if(player.score >= quizSet.length){
    console.log("Yay!! you have set a new high score!!!\n");
    // making current player highscorer if he beaten the existing one
    highScorer = player;
    player.score = 0;
    level++;
    console.log(chalk.bgYellow("Be ready for Next Level"));
    if(level == 3){
      console.log(chalk.bgYellow("Ohh..that was the last level!!! \nYOU MADE IT TO LAST LEVEL!!!"));
    }
    else{
    play(player, level);}
  }
}
// the actual playground!!!
function play(player, level){
  console.log("\nBe ready, "+player.name);
  
  if (level == 1){quizSet = quizSet_level01;}
  else if(level == 2){quizSet = quizSet_level02;}
  else if(level == 3){quizSet = quizSet_level03;}
  var i = 0;
  while(ready && i< quizSet.length){
    userAns = readLineSync.question("\n"+quizSet[i].question+"\n"+quizSet[i].options+"Option: ");
    // checking user answer
    if(userAns == quizSet[i].answer){
      player.score++;
    }
    else{
      console.log(chalk.red("\nhaha..you are wrong here, \nbut wait the game isn't finished yet!!!\n"));
      }
      if(i != quizSet.length-1){
        wantToContinue = readLineSync.question("continue?\ny or n: ")
        if(wantToContinue === 'n'){
          console.log(chalk.bgRed.white("Goodbye!!!"));
          ready = false;
        }
      }
    i++;
    }
    // calling printScore() to print score 
    printScore(player, quizSet);
}
// calling function to accept the user's details 
acceptPlayerDetails();

// calling the main play() function, with this player
play(playerList[0], level);



