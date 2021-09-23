module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: 'e91e63',
            author: { name: `No results: ⚠️`},
            footer: { text: `No results found on YouTube for ${query}`},
        }
    });
};