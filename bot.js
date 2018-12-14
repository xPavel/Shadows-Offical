const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTIyNTA1NDkyNzkxMDMzODU4.DvWpHw.7jRoYyGxbuqdhao_ZoD0kAhC-oQ);
