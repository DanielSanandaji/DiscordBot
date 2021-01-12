module.exports = {
    name: 'slåpå',
    description: "Tillåter en användare att skriva igen",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> kan skriva igen`);
        } else {
            message.channel.send('Kan ej hitta användaren!');
        }
    }
}