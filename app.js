// Impprt Telegraf
const { Telegraf } = require('telegraf');

// Import dotenv
require('dotenv').config();

// Add all env variables in a variable
const env = process.env;

// Init bot
const bot = new Telegraf(env.BOT_TOKEN);

// On hearing something exactly
bot.on('message', (ctx) => {
    const input = ctx.message.text;
    
    ctx.reply(`You said: ${input}`);
});

// Launch bot
bot.launch();