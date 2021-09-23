module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Music stopped: ⏹️`},
            footer: { text: `There is no more member in the voice channel` },
        }
    });
};