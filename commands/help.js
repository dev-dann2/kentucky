const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){

    let helpmbed = new MessageEmbed()
      .setAuthor("Kentucky", client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .setThumbnail("https://cdn.discordapp.com/avatars/782962912561332234/3c0bc529a5ff01173ad9edd27c99fd39.webp?size=4096")
      .addField("Kentucky Music Bot List Commands", "this is a list commands Kentucky Music Bot")
      .addField("Music", "```Volume, Stop, Skipto, Skip, Search, Resume, Shuffle, Remove, Queue, Playlist, Play, Pause, Nowplaying, Lyrics, Loop, Help, Afk, Join, Leave```")
      .setFooter("Listening And Chill!")
      .setColor("BLUE")
    message.channel.send(helpmbed);
}
};