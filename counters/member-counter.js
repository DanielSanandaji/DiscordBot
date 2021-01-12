module.exports = async (client) => {
    const guild = client.guilds.cache.get('793309742809743362');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('797666409680601119');
        channel.setName(`Totala medlemmar: ${memberCount.toLocaleString()}`);
        console.log('Updaterar antalet medlemmer:')
    }, 65000);
}