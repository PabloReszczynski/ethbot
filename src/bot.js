const builder = require('botbuilder');
const Dialogs = require('./dialog');

module.exports = (transport, connector) => {
  const bot = new builder.UniversalBot(connector);
  const dialogs = Dialogs(transport);
  for (const dialog in dialogs) {
    bot.dialog(dialog.route, dialog.fun);
  }
  return bot;
};


