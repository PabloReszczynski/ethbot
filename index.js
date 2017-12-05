require('dotenv').config();
const Bot = require('./src/bot');

const restify = require('restify');
const builder = require('botbuilder');

const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
  console.log('%s listening to %s', server.name, server.url);
});

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());
Bot(connector);
