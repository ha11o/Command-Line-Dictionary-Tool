
function GetRandomWord(result){
  if (result.statusCode === 200){
      if(typeof(result.body.word) !== undefined ){
            return (result.body.word);
      }
      else {
        //throw errors
        return ("Oh Crap! no random words found");
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
          return("Oh Crap! no matching definations found");
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
        return("Oh Crap! no Synonym found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }
}


function GetAntonym(result) {

  if (result.statusCode === 200){
      if(result.body.length > 1 && typeof(result.body[1].relationshipType) !== undefined && result.body[1].words.length >0){
          return (result.body[1].words);
      }
      else {
        //throw errors
        return ("Oh Crap! no Antonym found");
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
        return ("Oh Crap! no matching examples found");
      }
  }
  else {
      throw new Error("Oh no! something wrong communicating the api");
  }

}

function GetWordFullDict(result){
  var fulldict = {

    "Defination"  :  GetDefination(result[0]),
    "Synonym"     :  GetSynonym(result[1]),
    "Antonym"     :  GetAntonym(result[2]),
    "Example"     :  GetExample(result[3])

  };
  return fulldict;
}

module.exports = {

    GetRandomWord        :GetRandomWord,
    GetDefination        :GetDefination,
    GetSynonym           :GetSynonym,
    GetAntonym           :GetAntonym,
    GetExample           :GetExample,
    GetWordFullDict      :GetWordFullDict

};
