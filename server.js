// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const AgencyServiceClient = require("@streetcred.id/service-clients").AgencyServiceClient;
const Credentials = require("@streetcred.id/service-clients").Credentials;

const client = new AgencyServiceClient(new Credentials("1b9bf07074b5eae5e2e71a11af9fd76ee450a34de5f06b160dadfd3797b1ec35", "46c35263471e4809aff4f998618b04e8"));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const listOrganizations = async () => {
    var result = await client.listTenants();
    result.forEach(org => console.log(org));
}

const createCredentialDefinition = async () => {
  var result = await client.createCredentialDefinition()
}


