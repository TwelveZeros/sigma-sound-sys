module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Music stopped: ⏹️`},
            footer: { text: `Music stopped as there is no more music in the queue` },
        }
    });
};