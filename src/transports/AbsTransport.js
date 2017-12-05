class AbsTransport {
  constructor() {
    if (new.target === AbsTransport) {
      throw new TypeError('Cannot construct abstract instances directly');
    }
  }

  getTicker() {
    throw new Error('Method "getTicker" not implemented');
  }
}

module.exports = AbsTransport;
