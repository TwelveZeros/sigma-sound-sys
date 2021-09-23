module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Music stopped: ⏹️`},
            footer: { text: `I have been disconnected from the channel` },
        }
    });
};