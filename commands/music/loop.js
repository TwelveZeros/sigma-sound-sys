module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
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

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'e91e63',
                        author: { name: `Repeat mode: ☑️`},
                        footer: { text: `Disabled` },
                    }
                });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'e91e63',
                        author: { name: `Repeat mode: 🔁`},
                        footer: { text: `The whole queue will be repeated endlessly` },
                    }
                });
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'e91e63',
                        author: { name: `Repeat mode: ☑️`},
                        footer: { text: `Disabled` },
                    }
                });
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'e91e63',
                        author: { name: `Repeat mode: 🔂`},
                        footer: { text: `The current music will be repeated endlessly` },
                    }
                });
            };
        };
    },
};