require('dotenv').config();

const restify = require('restify');
const builder = require('botbuilder');
const axios = require('axios');

const cAPI = 'https://api.cryptomkt.com/v1'

const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
  console.log('%s listening to %s', server.name, server.url);
});

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector);

bot.dialog('/', session => {
  const ticker = axios.get(`${cAPI}/ticker?market=ETHCLP`).then(res => {
    const data = res.data.data[0];
    console.log(data);
    session.send('El precio de ETH esta en %s CLP', data.last_price);
  });
});
