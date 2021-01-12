const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const prefix = '-';
const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('StiXx är online')
    memberCounter(client);
});

client.on('guildMemberAdd', GuildMember => {
    let welcomeRole = GuildMember.guild.roles.cache.find(role => role.name === 'member');

    GuildMember.roles.add(welcomeRole);
    GuildMember.guild.channels.cache.get('796202098995626034').send(`Welcome <@${GuildMember.user.id}> to the server!`);
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'regler') {
        client.commands.get('regler').execute(message, args, Discord);
    }   else if (command === 'rensa') {
        client.commands.get('rensa').execute(message, args, Discord);
    }   else if (command === 'sparka') {
        client.commands.get('sparka').execute(message, args, Discord);
    }   else if (command === 'banna') {
        client.commands.get('banna').execute(message, args, Discord);
    }  else if (command === 'tyst') {
        client.commands.get('tyst').execute(message, args, Discord);
    }  else if (command === 'slåpå') {
        client.commands.get('slåpå').execute(message, args, Discord);
    }   else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord);
    } else if (command === 'spela') {
        client.commands.get('spela').execute(message, args, Discord);
    } else if (command === 'lämna') {
        client.commands.get('lämna').execute(message, args, Discord);
    }
/*
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args);
    }

    
*/
});

client.login('NzkzMzA4MTk2NDM3MzYwNjQx.X-qX1A.U2FTGXkS_E5pbrtS7pTKQ-CWty0');