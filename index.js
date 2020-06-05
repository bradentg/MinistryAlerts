const Discord = require('discord.js');
const client = new Discord.Client();
const server = require('express').createServer();

server.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});


client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!test') {
    message.channel.send('This is a test. Do not be alarmed. Please carry on.');
  } else if (message.content === '!hello') {
    console.log(message.guild.name);
    let guild = message.guild;
    let member;
    if (guild.available){
      member = message.guild.member(message.author);
    }

    message.channel.send(`Greetings citizen No. ${message.author.id} (${member.nickname}).\nMay the Bean bless you, may the Ministry guide you, may the Emperor protect you.`);
  }
});

client.login(process.env.BOT_TOKEN);
