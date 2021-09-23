module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Now playing: ▶️`},
            footer: { text: `Track: ${track.title}`},
            footer: { text: `Channel: ${message.member.voice.channel.name}` },
        }
    });
};