const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Yazan");


client.on("ready", () => {
let channel =     client.channels.get("525995603818446879")
setInterval(function() {
channel.send(`yazon pro xD``);
}, 30)
})

client.login(process.env.BOT_TOKEN);
