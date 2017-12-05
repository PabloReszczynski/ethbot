const AbsTransport = require('./AbsTransport');

class MockTransport extends AbsTransport {
  constructor() {
    super();
    this._ticker = null;
  }

  setTicker(ticker) {
    this._ticker = ticker;
  }

  getTicker() {
    return this._ticker;
  }
};

module.exports = MockTransport;
