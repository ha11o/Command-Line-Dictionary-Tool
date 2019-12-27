
var inquirer = require('inquirer');
const getData = require("./getdata");
const handleResponses = require('./handleResponses');

function shuffelWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}



function GiveOptions(word,fulldict){
    inquirer
      .prompt([
        {
          name: 'selection',
          message: "Please select one of the following option\r\n 1 -> try again \n 2 -> hint \n 3 -> quit\r\n",
          default: '',
        },
      ])
      .then(answer => {
        console.log(answer);
        switch (answer.selection) {
          case '1':
            askQuestionCheckAnswer(word,fulldict);
            break;
          case '2':
            console.log("\r\n");
            console.log(shuffelWord(word));
            console.log("\r\n");
            askQuestionCheckAnswer(word,fulldict);
            break;
          case '3':
            console.log("\r\n"+word)
            console.log(fulldict);
            break;
        }
      });



}

function checkInList(word,list){
    console.log(list[0]);

    for(i=0;i<list.length;i++){
            if( word.toLowerCase() === list[i].toLowerCase() ){
              return true;
            }
          }

      return false;
}

function askQuestionCheckAnswer(word,fulldict){
  console.log(word);
  console.log(fulldict);

  inquirer
        .prompt([
          {
            name: 'word',
            message: fulldict.Defination,
            default: '',
          },
        ])
        .then(answer => {
            console.log("\r\nYou entered " +answer.word);
            if(word.toLowerCase() === answer.word.toLowerCase() || checkInList(answer.word,fulldict.Synonym)){
                console.log("\nYou have gussed correctly!\r\nHurray!\r\n");
            }
            else {
              GiveOptions(word,fulldict);
            }
        });

}


function start(word,fulldict){


      console.log("\r\nCan you guess the word?\n");
      askQuestionCheckAnswer(word,fulldict);


}

function letsPlay(word){
  console.log("\r\n let's play bamboozled \r\n");
  getData.GetRandomWord()
      .then(
          result => {
              var randomWord = handleResponses.GetRandomWord(result);
              getData.GetWordFullDict(randomWord)
                        .then(
                          result => {
                               start(randomWord,handleResponses.GetWordFullDict(result));
                          }
                        )

          }
      )
      .catch(
        err => {
            throw new Error(err);
        }
      )
      .finally(

      );

}


module.exports.letsPlay = letsPlay;
