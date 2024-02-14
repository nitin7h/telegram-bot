const Telegram = require("node-telegram-bot-api")


const botToken = "6793199054:AAF4P1S9GmggmquZOplCF2WqMwkrMxFjGHc"


const bot = new Telegram(botToken, { polling: true })





bot.on("message", (msg) => {
    console.log(msg);

    // bot.sendMessage(msg.chat.id, "Hello From Nitin")




    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot!\n Press\n 1 : who develope this bot\n 2 : GF name\n 3 : My insta id');
    }
    if (messageText === 'Hi') {
        bot.sendMessage(chatId, 'Welcome to the bot!');
    }

    if (messageText === "1") {
        bot.sendMessage(chatId, 'Developer : Nitin Kumar');
    }
    if (messageText === "2") {
        bot.sendMessage(chatId, 'GF name : Ham pe toh hai no 😜');
    }
    if (messageText === "3") {
        bot.sendMessage(chatId, 'insta id : nittiin.kumar');
    }
})