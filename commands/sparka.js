module.exports = {
    name: 'sparka',
    description: "Sparkar en medlem ur servern",
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick();
            message.channel.send(`Användare <@${memberTarget.user.id}> har blivit sparkad`);
        }else {
            message.channel.send('Du kan inte sparka den användaren')
        }
    }
}