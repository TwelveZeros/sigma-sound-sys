module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        //  Сообщение о том что ты не находишься в голосовом канале
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Queue clear: ${client.emotes.error}`},
                footer: { text: `You're not in a voice channel !` },
            }
        });
        
        //  Сообщение о том что ты не находишься в голосовом канале
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Queue clear: ${client.emotes.error}`},
                footer: { text: `You're not in the same voice channel !` },
            }
        });

        //  Сообщение о том что ты не находишься в голосовом канале
        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Queue clear: ${client.emotes.error}`},
                footer: { text: `No music currently playing !` },
            }
        });

        //  Сообщение о том что ты не находишься в голосовом канале
        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Queue clear: ${client.emotes.error}`},
                footer: { text: `There is only one song in the queue.` },
            }
        });

        client.player.clearQueue(message);

        message.channel.send({
            embed: {
                color: 'e91e63',
                author: { name: `Queue clear: ${client.emotes.success}`},
                footer: { text: `The queue has just been removed !` },
            }
        });
    },
};
