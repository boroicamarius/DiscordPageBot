const Discord = require("discord.js")
const open = require('open');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'] })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


client.on("messageCreate", msg => {

  if(msg.author.bot || msg.author.system)
    return;

    let url;
    try {
      url = new URL(msg.content);
    } catch (_) {
      return;  
    }

    msg.react('❤️')

    if(url.hostname == 'youtu.be' || url.host == 'youtube.com')
        open(url.href) 

})

client.login('TOKEN HERE')