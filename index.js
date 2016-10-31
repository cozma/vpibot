var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
var bot = controller.spawn({
  token:require('./config').token
});

// give the bot something to listen for.
controller.hears('facts',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Virginia Tech was founded in 1872.');

});
