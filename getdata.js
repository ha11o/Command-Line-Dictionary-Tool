const request         = require("request");
const util            = require('util');
var   config          = require('./config');
const api             = require('./api')
const handleResponses =  require("./handleResponses")


const promiseRequest = util.promisify(request);

function GetRandomWord(){

    return api.GetData(config.word.randomWord);

}

async function GetDefination( word ) {

    return api.GetData(config.word.definitions,word);

}


function GetSynonym(word) {

    return api.GetData(config.word.relatedWords,word);

}


function GetAntonym(word) {

    return api.GetData(config.word.relatedWords,word);


}

function GetExample(word){

    return api.GetData(config.word.examples,word);

}



function GetWordFullDict(word) {


  var defn = GetDefination(word);
  var syn  = GetSynonym(word);
  var ant  = GetAntonym(word);
  var ex   = GetExample(word);

  return Promise.all([defn,syn,ant,ex]);
}



module.exports = {

    GetRandomWord        :GetRandomWord,
    GetDefination        :GetDefination,
    GetSynonym           :GetSynonym,
    GetAntonym           :GetAntonym,
    GetExample           :GetExample,
    GetWordFullDict      :GetWordFullDict

};
