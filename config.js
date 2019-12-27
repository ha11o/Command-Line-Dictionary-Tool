var config = {};





// {apihost}/words/randomWord?api_key={api_key}
// {apihost}/word/{word}/definitions?api_key={api_key}
// {apihost}/word/{word}/examples?api_key={api_key}
// {apihost}/word/{word}/relatedWords?api_key={api_key}


config.api = {}
config.word = {}

// api config
config.api.key  = "b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164";
config.api.host = "https://fourtytwowords.herokuapp.com";


//getting words webhooks
config.word.randomWord   = "randomWord";
config.word.definitions  = "definitions";
config.word.examples     = "examples";
config.word.relatedWords = "relatedWords";


module.exports = config;
