const { execute } = require("./youtube");

module.exports = {
    name: 'regler',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Regler')
        .setURL('https://youtube.com')
        .setDescription('Här är reglerna för servern')
        .addFields(
            {name: 'Rule 1', value: 'Håll god ton :100:'},
            {name: 'Rule 2', value: 'Följ  twitch.tv/nilslegend :smiling_face_with_3_hearts:'},
            {name: 'Rule 3', value: 'Inga memes :man_mage:'}
        )
        .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/a8d2a756-b90a-439a-be93-87625408faf4-profile_image-300x300.png')
        .setFooter('Regelbrott kan leda till tillfällig mute och ev ban');

        message.channel.send(newEmbed);
    }

    
}