module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Playlist added: ✔️`},
            description: `Playlist: ${playlist.title}`,
            footer: { text: `Added: ${playlist.tracks.length} songs`},
        }
    });
};