const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();

app.get('/',(req,res) => {return res.send('Hello');});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
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

    let name;
    if (member.nickname != null){
      name = member.nickname;
    } else {
      name = message.author.username;
    }

    message.channel.send(`Greetings citizen No. ${message.author.id} (${name}).\nMay the Bean bless you, may the Ministry guide you, may the Emperor protect you.`);
  }
});

client.login(process.env.BOT_TOKEN);
