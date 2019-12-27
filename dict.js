const request = require("request");
const util    = require('util');
const GetData = require("./getdata")

var   config    = require('./config');




function HandleWordCommands(command,word){
  switch(command) {

    case "defn":
      console.log(GetDefination(word));
      break;

    case "syn":
      console.log(GetSynonym(word));
      break;

    case "ant":
      console.log(GetAntonym(word));
      break;

    case "ex":
      console.log(GetExample(word));
      break;

    default:
      console.log(config.WrongOptions);

  }
}


function ParseInput(commandsPassed){

        if (commandsPassed.length === 2){

            command    = commandsPassed[0];
            word       = commandsPassed[1];

            HandleWordCommands(command,word);

        }
        else{
            if(commandsPassed.length === 1){
                command  = commandsPassed[0];
                if(command === "play"){
                    Play();
                }
                else{
                  console.log(GetWordFullDict(command));

                }
            }
            else if (commandsPassed.length === 0) {

                console.log(GetRandomWordFullDict());

            }
            else{
              console.log(config.WrongCommand);
            }
        }


}

//Removing the first and second as they are node path and file name
var commandsPassed  = process.argv.slice(2)
ParseInput(commandsPassed);
