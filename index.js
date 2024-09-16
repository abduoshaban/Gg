const {Client,ActivityType} = require("discord.js");

const client = new Client({
  intents: 131071,
});

const prefix = "+"; // البريفكس

client.on("ready", () => {
  console.log(`✅ | Logged in as ${client.user.tag}!\n⭐ | By General Progs </> : discord.gg/g-p
    `);

  client.user.setActivity({
    type: ActivityType.Streaming,
    name : '𝐈𝐂𝐄 𝐀𝐂𝐓𝐈𝐂',
    url: "https://www.twitch.tv/fxdark1."
  });

});


const express = require('express');
const app = express();
app.listen(() => console.log(('General Progs Help you every time ↗️ ')));
app.use('/ping', (req, res) => {  res.send(new Date());
});

//==================== MENTION BOT  ===============================

client.on("messageCreate" , (message) => {
  if(message.content == `<@${client.user.id}>`){
    if(message.author.bot) return;
    message.reply(`Hi I'm *voice 24h* bot , My prefix is \`${prefix}\``)
  }
})

//==================== MENTION BOT ===============================

//==================== VOICE JOINER ===============================
const { joinVoiceChannel } = require('@discordjs/voice');

    setInterval( async () => {
    client.channels.fetch("1284457345094647808") // ايدي الروم الصوتي
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { console .log(`I don't found the voice room`)});
    }, 1000)

//==================== VOICE JOINER ===============================

client.login("MTI4MzgxNzE2MzUzNDIzNzcyNw.G7TPLI.1PCE_gtSsgUiLBYN6XN2mZLOM5KtwsrIFDxyd4"); // توكن البوت 
