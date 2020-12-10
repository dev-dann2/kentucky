const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "join",
        description: "To show all commands",
        usage: "[command]",
        aliases: []
    },

    run: async function(client, message, args){

	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
    message.channel.guild.voice.setSelfDeaf(true);

    return message.channel.send(`✅ **Joined to** \`${message.member.voice.channel.name}\` **And summoned from** \`${message.channel.name}\``);
    }
  }
};