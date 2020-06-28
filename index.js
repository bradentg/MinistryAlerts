const { prefix } = require('./config.json');
const { bottoken } = require('./bot-token.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();

app.get('/', (req, res) => {return res.send('Hello');});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.author.bot) return;

	// const args = message.content.slice(prefix.length).split(/ +/);
	// const command = args.shift().toLowerCase().trim();

	if (message.content === `${prefix}test`) {
		message.channel.send('This is a test. Do not be alarmed. Please carry on.');
	}
	else if (message.content === `${prefix}hello`) {
		console.log(message.guild.name);
		const guild = message.guild;
		let member;
		if (guild.available) {
			member = guild.member(message.author);
		}

		let name;
		if (member.nickname != null) {
			name = member.nickname;
		}
		else {
			name = message.author.username;
		}
		message.channel.send(`Greetings citizen No. ${message.author.id} (${name}).\nMay the Bean bless you, may the Ministry guide you, may the Emperor protect you.`);

	}
	else if (message.content === `${prefix}wiki`) {
		message.channel.send('The Ministry\'s comprehensive guide to Beanish lore can be found here: https://beanland.fandom.com/wiki/The_Beanland_Wiki \nBrought to you by the Ministry of Archives.');
	}
	else if (message.content === `${prefix}ip`) {
		message.channel.send('beanland.apexmc.co [Brought to you by the Ministry of Domains]');
	}
	else if (message.content === `${prefix}map`) {
		message.channel.send('A map of the known Beanland can be found here: http://147.135.31.32:9653/ \nBrought to you by the Ministry of Cartography in partnership with the Ministry of Domains.');
	}
	else if (message.content === `${prefix}botinfo`) {
		message.channel.send('This bot is a proprietary alert system brought to you by the Ministerial Broadcasting Service, a department of Ministry Telecom.');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}ping`) {
		message.channel.send('Pong');
	}
	else if (message.content === `${prefix}birth`) {
		message.channel.send(`And on the date ${message.guild.createdAt}, Year of our Bean, He fashioned this server in his own image, and He saw that it was good.`);
	}
	else if (message.content === `${prefix}lunchbreak`) {
		message.channel.send('https://i.ytimg.com/vi/YGc6Cwj27Pk/hqdefault.jpg');
	}
	else if (message.content.toLowerCase().includes('bean')) {
		console.log('bean');
		message.react('🅱️').then(console.log).catch(console.error);
		message.react('🇪').then(console.log).catch(console.error);
		message.react('🅰️').then(console.log).catch(console.error);
		message.react('🇳').then(console.log).catch(console.error);
	}
	// admin only
	else if (message.author.id === '151071288138530816' || message.author.id === '202972704305971210') {
		if (message.content.startsWith(`${prefix}testannounce`)) {
			const announcement = message.content.slice(13).trim();
			client.channels.cache.get('718261746858721363').send(announcement);
		}
		else if (message.content.startsWith(`${prefix}announceall`)) {
			const announcement = message.content.slice(12).trim();
			client.channels.cache.get('555569923288465420').send('@everyone' + ' ' + announcement);
		}
		else if (message.content.startsWith(`${prefix}announce`)) {
			const announcement = message.content.slice(9).trim();
			client.channels.cache.get('555569923288465420').send(announcement);
		}
	}

});

client.login(process.env.BOT_TOKEN);
