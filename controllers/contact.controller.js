
/*
const bot = require('../app');

const contact = (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const conData = {};
  bot.sendMessage(chatId, `What's your name?`);
  bot.once('message', (msgName) => {
    conData.name = msgName.text;
    bot.sendMessage(chatId, 'Send your mail:');
    bot.once('message', (msgMail) => {
      conData.email = msgMail.text;
      bot.sendMessage(chatId, 'Send your message:');
      bot.once('message', (message) => {
        conData.message = message.text;
        bot.sendMessage(chatId, `Name: ${conData.name}\nEmail: ${conData.email}\nMessage: ${conData.message}\n\n\nLooks fine? /confirm it.\nGot a problem? send /contact to try again.`);
        bot.once('message', (msgLast) => {
          if (msgLast.text === '/confirm') {
            bot.sendMessage(chatId, 'Thanks for contacting us.');
            console.log(conData);
          }
        });
      });
    });
  });
};

module.exports = contact;

*/