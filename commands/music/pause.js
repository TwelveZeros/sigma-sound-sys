module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `You're not in a voice channel !` },
            }
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `You're not in the same voice channel !` },
            }
        });

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `No music currently playing !` },
            }
        });

        if (client.player.getQueue(message).paused) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `The music is already paused !` },
            }
        });

        client.player.pause(message);

        message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Pause: ⏸️`},
                description: `Track: ${client.player.getQueue(message).playing.title}`,
                footer: { text: `The music is paused`},
            }
        });
    },
};