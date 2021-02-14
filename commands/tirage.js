const Discord = require('discord.js');
const bdd = require("../bdd.json");
module.exports.run = async (bot, message, args, Savebdd) => {
    index = Math.floor(Math.random() * Math.floor(bdd["participants-event"].length))
    gagnant = bot.users.cache.get(bdd["participants-event"][index]);
    bot.channels.cache.get(bdd["channel-events"]).send(`Le gagnant est : ${gagnant}`).then(message => {
        message.react("🎉");
    })
    bdd["participants-event"].splice(index, 1);
    Savebdd();
}

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

module.exports.config = {
    name: "tirage"
}