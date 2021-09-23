module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Playlist added: ✔️`},
            footer: { text: `${playlist.title}`},
            footer: { text: `Added: ${playlist.tracks.length} songs`},
        }
    });
};