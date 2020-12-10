const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "leave",
        description: "To show all commands",
        usage: "[command]",
        aliases: []
    },

    run: async function(client, message, args){

	      if (message.member.voice.channel) {
      const leaving = await message.guild.voice.channel.leave();

    return message.channel.send(`**The bot has been leaving from** \`${message.member.voice.channel.name}\``);
    }
  }
};