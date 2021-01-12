module.exports = {
    name: 'banna',
    description: "Detta kommando bannar en användare!",
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban();
            message.channel.send("Användaren har blivit bannad");
        }else {
            message.channel.send('Du kan inte banna användaren')
        }
    }
}