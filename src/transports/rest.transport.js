const axios = require('axios');
const AbsTransport = require('./AbsTransport');

class RestTransport extends AbsTransport {
  constructor() {
    super();
    this._cApi = 'https://api.cryptomkt.com/v1';
    this._ticker_endpoint = `${cApi}/ticker?market=ETHCLP`;
    this._ticker = null;
    setInterval(this._setTicker, 10000);
  }

  getTicker() {
    return this._ticker;
  }

  _setTicker() {
    axios.get(this._ticker_endpoint).then(res => {
      this._ticker = R.pathOr(null, ['data', 'data', 0], res);
    }).catch(console.error);
  }
};

module.exports = RestTransport;
