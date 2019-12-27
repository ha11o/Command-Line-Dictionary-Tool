const request = require("request");
const util    = require('util');
const getData = require("./getdata")
const handleResponses = require('./handleResponses')
var   config    = require('./config');




async function HandleWordCommands(command,word){

  switch(command) {

    case "defn":
      getData.GetDefination(word)
              .then(
                  result => {
                      console.log(handleResponses.GetDefination(result));
                  }
              )
              .catch(
                err => {
                    throw new Error(err);
                }
              )
              .finally(

              );
      break;

    case "syn":
      getData.GetSynonym(word)
              .then(
                  result => {
                      console.log(handleResponses.GetSynonym(result));
                  }
              )
              .catch(
                err => {
                    throw new Error(err)
                }
              )
              .finally(

              );
      break;

    case "ant":
      getData.GetAntonym(word)
              .then(
                  result => {
                      console.log(handleResponses.GetAntonym(result));
                  }
              )
              .catch(
                err => {
                    throw new Error(err)
                }
              )
              .finally(

              );
      break;

    case "ex":
      getData.GetExample(word)
              .then(
                  result => {
                      console.log(handleResponses.GetExample(result));
                  }
              )
              .catch(
                err => {
                    throw new Error(err)
                }
              )
              .finally(

              );
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
                   getData.GetWordFullDict(command)
                            .then(
                                result => {
                                    console.log(handleResponses.GetWordFullDict(result));
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
            }
            else if (commandsPassed.length === 0) {

                    getData.GetRandomWord()
                        .then(
                            result => {
                                var randomWord = handleResponses.GetRandomWord(result);
                                console.log(randomWord);
                                getData.GetWordFullDict(randomWord)
                                          .then(
                                              result => {
                                                  console.log(handleResponses.GetWordFullDict(result));
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
            else{
              console.log(config.WrongCommand);
            }
        }


}

//Removing the first and second as they are node path and file name
var commandsPassed  = process.argv.slice(2)
ParseInput(commandsPassed);
