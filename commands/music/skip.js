module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

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

        client.player.skip(message);

        message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Skip: ⏭️`},
                footer: { text: `The current music has just been skipped` },
            }
        });
    },
};