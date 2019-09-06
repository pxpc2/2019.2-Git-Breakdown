var request = require('request')

var urlBase = 'https://api.github.com'
var urlEndpoint = '/repos/fga-eps-mds/2019.2-Git-Breakdown'

exports.get = (req, res, next) => {
    var code = '203';
    request.get({ headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'pdaniel37'
    },
    uri: urlBase+urlEndpoint }, function (error, response, body) {
        code = body;
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        res.status(200).send(code);
    });
    
}

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};