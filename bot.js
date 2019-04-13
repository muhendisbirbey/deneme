const Discord = require('discord.js');
const bot = new Discord.Client ();


bot.on('ready', () => {
  bot.user.setGame('instagram : mühendisbeyilemühendishanım') })




bot.login(process.env.BOT_TOKEN);
