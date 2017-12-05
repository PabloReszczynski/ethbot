const axios = require('axios');

const cApi = 'https://api.cryptomkt.com/v1';
const ticker_endpoint = `${cApi}/ticker?market=ETHCLP`;

const defecto = {
  route: '/',
  fun: session => {
    const ticker = axios.get(ticker_endpoint).then(res => {
      const data = res.data.data[0];
      session.send('El precio de ETH esa en %s CLP', data.ask);
    }).catch(err => {
      console.error(err);
      session.send('Hubo un problema: %s', err);
    });
  }
};

module.exports = [
  defecto
];
