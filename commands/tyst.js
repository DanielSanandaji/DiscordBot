const ms = require('ms')
module.exports = {
    name: 'tyst',
    description: "Tystar ned en användare",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> har blivit nedtystad`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> har blivit nedtystad i ${ms((ms(args[1])))}`);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> kan skriva igen`);
            }, ms(args[1]));
            
        } else {
            message.channel.send('Kan ej hitta användaren!');
        }
    }
}