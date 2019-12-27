const request = require("request");
const util    = require('util');
var  config    = require('./config');




function HandleWordCommands(command,word){
  switch(command) {

    case "defn":
      GetDefination(word);
      break;

    case "syn":
      GetSynonym(word);
      break;

    case "ant":
      GetAntonym(word);
      break;

    case "ex":
      GetExample(word);
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
                  console.log(config.WrongCommand);
                }
            }
            else if (commandsPassed.length === 0) {

                GetRandomWordFullDict();

            }
            else{
              console.log(config.WrongCommand);
            }
        }


}

//Removing the first and second as they are node path and file name
var commandsPassed  = process.argv.slice(2)
ParseInput(commandsPassed);
