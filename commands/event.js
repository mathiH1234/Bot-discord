const Discord = require('discord.js');
const bdd = require("../bdd.json");
module.exports.run = async (bot, message, args, Savebdd) => {
    	if(!message.member.hasPermission('ADMINISTRATOR')) return;
        bot.channels.cache.get(bdd["channel-events"]).send("Message du concours").then(message => {
            message.react("📨");
            bdd["message-event"] = message.id;
            Savebdd();
        });
    }

    function Savebdd() {
        fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
            if (err) message.channel.send("Une erreur est survenue.");
        });
    }
    
module.exports.config = {
    name: "event"
}