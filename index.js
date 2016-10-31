var Botkit = require('botkit');

// json file of facts
var parsedJSON = require('./vtfacts');

var controller = Botkit.slackbot({
  debug: false

});

// connect the bot to a stream of messages
controller.spawn({
  token: "",
}).startRTM()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// give the bot something to listen for.
controller.hears(['fact', 'tell me about tech', 'tell me about my school', 'something cool'],['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message, parsedJSON.facts[getRandomInt(0, 30)].fact);

});
