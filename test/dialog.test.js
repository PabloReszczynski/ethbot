const expect = require('chai').expect;
const Bot = require('../src/bot');
const builder = require('botbuilder');
const MockTransport = require('../src/transports/mock.transport');
const Dialog = require('../src/dialog.js');

describe('/', () => {
  let transport;
  let connector;
  let bot;

  beforeEach(() => {
    transport = new MockTransport();
    connector = new builder.ConsoleConnector();
    bot = Bot(transport, connector);
  });

  describe('ask', () => {
    it('should return some price', () => {
      bot.on('send', msg => {
        expect(msg.test).to.be.equal('');
      });
      connector.processMessage('test');
    });
  });
});
