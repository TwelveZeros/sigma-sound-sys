module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({
                embed: {
                    color: 'e91e63',
                    author: { name: `Error: ⚠️`},
                    footer: { text: `There is no music being played on this server !`},
                }
            });
            break;
        case 'NotConnected':
            message.channel.send({
                embed: {
                    color: 'e91e63',
                    author: { name: `Error: ⚠️`},
                    footer: { text: `You are not connected in any voice channel !`},
                }
            });
            break;
        case 'UnableToJoin':
            message.channel.send({
                embed: {
                    color: 'e91e63',
                    author: { name: `Error: ⚠️`},
                    footer: { text: `I am not able to join your voice channel, please check my permissions !`},
                }
            });
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
            message.channel.send({
                embed: {
                    color: 'e91e63',
                    author: { name: `Error: ⚠️`},
                    text: { text: `Something went wrong ...`},
                    footer: { text: `||Code: ${error}||`},
                }
            });
    };
};
