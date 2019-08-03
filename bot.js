const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("604274143164366858")
setInterval(function() {
channel.send(`1ahmed 1ahmed 1ahmed 1ahmed 1ahmed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);