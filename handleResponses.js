
function GetRandomWord(result){
  if (result.statusCode === 200){
      if(result.body.length > 0 && typeof(result.body.word) !== undefined ){
            return (result.body.word);
      }
      else {
        //throw errors
        throw new Error("Oh Crap! no random words found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }
}


function GetDefination(result){
    if (result.statusCode === 200){
        if(result.body.length > 0){
            return (result.body[0].text);
        }
        else {
          //throw errors
          throw new Error("Oh Crap! no matching definations found");
        }
    }
    else {
        throw new Error("Oh no! something wrong communicating the api");
    }

}


function GetSynonym(result){
  if (result.statusCode === 200){
      if(result.body.length > 0 && typeof(result.body[0].relationshipType) !== undefined && result.body[0].words.length >0){
          return (result.body[0].words);
      }
      else {
        //throw errors
        throw new Error("Oh Crap! no Synonym found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }
}


function GetAntonym(result) {

  if (result.statusCode === 200){
      if(result.body.length > 0 && typeof(result.body[0].relationshipType) !== undefined && result.body[0].words.length >0){
          return (result.body[1].words);
      }
      else {
        //throw errors
        throw new Error("Oh Crap! no Antonym found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }

}

function GetExample(result){

  if (result.statusCode === 200){

      if(result.body.examples.length > 0){

          return (result.body.examples[0].text);
      }
      else {
        //throw errors
        throw new Error("Oh Crap! no matching examples found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }

}

module.exports = {

    GetRandomWord        :GetRandomWord,
    GetDefination        :GetDefination,
    GetSynonym           :GetSynonym,
    GetAntonym           :GetAntonym,
    GetExample           :GetExample

};
