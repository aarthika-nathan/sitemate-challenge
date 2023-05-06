const fetch = require('node-fetch');

const RestClient = function (url, options) {      
    fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

module.exports = RestClient;