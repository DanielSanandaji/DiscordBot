module.exports = {
    name: 'rensa',
    description: "Rensar meddelanden!",
   async execute(message, args) {
        if(!args[0]) return message.reply("Ange antalet meddelanden du vill radera!");
        if(isNaN(args[0])) return message.reply('Inputen måste vara en siffra');

        if(args[0] > 100) return message.reply("Du kan inte radera mer än 100 meddelanden");
        if(args[0] < 1) return message.reply("Du måste radera minst ett meddelande!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}