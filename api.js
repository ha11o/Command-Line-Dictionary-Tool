const request = require("request");
const util    = require('util');
const urljoin = require('url-join');
var   config  = require('./config');


// primisify the request
const promiseRequest = util.promisify(request);


//Get the api key and host form the config file
const api_key  = config.api.key;
const api_host = config.api.host;

// {apihost}/words/randomWord?api_key={api_key}
// {apihost}/word/{word}/definitions?api_key={api_key}
// {apihost}/word/{word}/examples?api_key={api_key}
// {apihost}/word/{word}/relatedWords?api_key={api_key}

function UrlGenerator(dataTypeRequested,word=""){

      if(dataTypeRequested === config.word.randomWord){

          var url =  urljoin(api_host,"words",dataTypeRequested,"?api_key="+api_key);
          return url;

      }
      else{

          var url =  urljoin(api_host,"word",word,dataTypeRequested,"?api_key="+api_key);
          return url;

      }

}


//returns a promisifed request so handle it
async function ApiRequest(url) {

      return promiseRequest(url,{ json: true });
}


async function GetData(dataTypeRequested,word) {

    var generatedUrl = UrlGenerator(dataTypeRequested,word);
    return ApiRequest(generatedUrl);

}

module.exports = {

    GetData:GetData

};
