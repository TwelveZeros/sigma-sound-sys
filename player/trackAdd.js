module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Added to the queue: ☑️`},
            footer: { text: `Track: ${track.title}`},
        }
    });
};