// Import Telegraf
const { Telegraf } = require('telegraf');

// Import Axios
const axios = require('axios');

// Import dotenv
require('dotenv').config();

// Add all env variables in a variable
const env = process.env;

// Init bot
const bot = new Telegraf(env.BOT_TOKEN);

// On hearing something exactly
bot.on('message', (ctx) => {
    const username = ctx.message.text;

    // Get method for GitHub API
    axios.get(`https://api.github.com/users/${username}`)
        .then((response) => {
            // Data object in response object
            const data = response.data;

            // Reply user data
            ctx.replyWithMarkdown(`
*${data.name}* with *${data.followers}* followers has *${data.public_repos}* public repositories.
He/She desribes him/his self *${data.bio}*.
This user lives in *${data.location}* and works in *${data.company}*.

If user has any links, here are available:
- [User blog or website](${data.blog})
- [Twitter account](https://twitter.com/${data.twitter_username})
            `);
        })
        .catch((error) => {
            return "Sorry an error :(";
        });
});

// Launch bot
bot.launch();
