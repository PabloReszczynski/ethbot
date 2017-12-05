const expect = require('chai').expect;
const Bot = require('../src/bot');
const builder = require('botbuilder');

describe('/', () => {
  describe('ask', () => {
    it('should return some price', () => {
      const connector = new builder.ConsoleConnector();
      const bot = Bot(connector);
      bot.on('send', msg => {
        expect(msg.test).to.be.equal('')
      });
      connector.processMessage('test');
    });
  });
});
