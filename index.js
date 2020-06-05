const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!test') {
    message.channel.send('This is a test. Do not be alarmed. Please carry on.');
  } else if (message.content === '!hello') {
    //guild = message.guild;
    console.log(message.guild.name);
    let guild = message.guild;
    let member;
    if (guild.available){
      member = message.guild.member(message.author);
    }

    message.channel.send(`Greetings citizen No. ${message.author.id} (${member.nickname}).\nMay the Bean bless you, may the Ministry guide you, may the Emperor protect you.`);
  }
});

//client.login('NzE4MjU3MDczOTg0MzcyNzM3.XtmRrw.k9XGKeFQ9rKh4SoxD317qi8HiJw');
client.login(process.env.BOT_TOKEN);
