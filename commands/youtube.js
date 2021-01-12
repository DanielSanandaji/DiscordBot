module.exports = {
    name: 'youtube',
    description: "sends the youtube link!",
    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "Mod");
/*
        if(message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send('You have the permission to ban members');
        } else {
            message.channel.send('You dont have the permission to ban members');
        } */
       

        if(message.member.roles.cache.some(r => r.name === "Mod")) {
            message.channel.send('https://www.youtube.com/');


        } else {
            message.channel.send('I see you dont have the correct permissions, let me change that :)');
           message.member.roles.add(role).catch(console.error);
        }
       
    }
}