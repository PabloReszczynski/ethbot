const builder = require('botbuilder');
const dialogs = require('./dialog');

module.exports = connector => {
  const bot = new builder.UniversalBot(connector);
  for (const dialog in dialogs) {
    bot.dialog(dialog.route, dialog.fun);
  }
  return bot;
};


