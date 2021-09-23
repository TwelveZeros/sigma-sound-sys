module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Playlist added: ✔️`},
            text: { text: `${playlist.title}`},
            text: { text: `Added: ${playlist.tracks.length} songs`},
        }
    });
};