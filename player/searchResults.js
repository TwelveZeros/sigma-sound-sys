module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `Search results for ${query}: ` },
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};