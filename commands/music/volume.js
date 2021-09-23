module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

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

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `Please enter a valid number !` },
            }
        });

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Error: ⚠️`},
                footer: { text: `Please enter a valid number (between 1 and 100) !` },
            }
        });

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Volume: 🔊 ${parseInt(args[0])}%`},
            }
        });
    },
};