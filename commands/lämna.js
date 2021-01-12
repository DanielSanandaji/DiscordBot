const { execute } = require("./spela");

module.exports = {
    name: 'lämna',
    description: 'Stoppar boten och lämnar kanalen, används för att stänga av musiken',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Du måste vara i en kanal")
        await voiceChannel.leave();
        await message.channel.send('Lämnar :smiling_face_with_tear:')
    }
}