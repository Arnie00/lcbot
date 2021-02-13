const discord = require("discord.js");

module.exports.run =async(bot, message, args) => {

    try{
     
     var text = "**LcBot** \n\n **__Commands__** \n\n ***Voor iedereen*** \n !hallo - Geeft een hallo terug. \n !info - Geeft info. \n\n ***Staff*** \n !ban - Ban iemand \n !kick - Kick iemand"

      message.author.send(text);

      message.reply("Alle commands Kan je vinden in je privéberichten.");




    } catch (error) {
        message.reply("Er is iets fout gelopen")
    }

}

module.exports.help = {
  name: "help"

}