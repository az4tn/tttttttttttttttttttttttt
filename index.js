const {Collection, Client, Discord} = require('discord.js')
const { keep_alive } = require("./keep_alive");

const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const ms = require('ms')
const packages = require('./package.json')
const client = new Client({ disableMentions: 'everyone' });
require('discord-buttons')(client);
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const { Player } = require('discord-player');

client.player = new Player(client);
client.config = config;
client.commands = new Collection(); 
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
   client.user.setActivity(`${prefix}projects | ${client.guilds.cache.size} Server, ${client.users.cache.size} User !`)
   console.log(`${client.user.username} Successfully Logged in!, ${client.guilds.cache.size} Servers, ${client.users.cache.size}Users.`)
})

/*
> Bot Servers Count : ${client.guilds.cache.size} \n
> Bot Users Count :   ${client.users.cache.size}
 */
client.on('message', async message => {

     const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
     if (message.content.match(prefixMention)) {
     return message.channel.send(`Hi! <@${message.author.id}>, My prefix is \`${prefix}\`, <#763843985537368075>`);
  }
     if(message.author.bot || message.channel.type === "dm") return;
     if (!message.content.startsWith(prefix)) return;
     if (!message.guild) return;
     if (!message.member) message.member = await message.guild.fetchMember(message);
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const cmd = args.shift().toLowerCase();
     if (cmd.length == 0) return;
     let command = client.commands.get(cmd)
     if (!command) command = client.commands.get(client.aliases.get(cmd));
     if (command) command.run(client, message, args)
   })

setInterval(async () => {
  const channelid = "914431931930783755" ////Channel Id
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('clickButton', async (button) => {
;
  const home = new MessageEmbed()

    .setTitle('Bot list')
    .setColor('#ffffff')
    .setDescription(`> *Here we will be displaying all the avalaible projects that was made by **[YassineHz](https://www.youtube.com/channel/UC2v_vSrvAMNqcNoKoxnk6ag)***\n > <:biohazard_PNG85:905542459013103638>  **Note : **\`react with the emojis to get the bot you need\`  \n> <:home:905539786255794246> :\`this emoji is to go back to this page\`\n`)
    .addField(`<:bd:905535375555063871> uptimebot`, `*\`\`\`Bot that keeps your bots up and running 24 hour\`\`\`*`,true)
    .addField(`<:music:905535378528796674> musicbot`, ` *\`\`\`Bot that plays music with from youtube to discord\`\`\`*`,true)
    .addField(`<:comm:905535376477790238> chatbot`, ` *\`\`\`Bot that chats like a real person\`\`\`*`,true)
    .addField(`<:spin:905535380193951744> spinbot`, ` *\`\`\`Bot That Generate for you random prize (nitro, netflix, spotify...)\`\`\`*`,true)
    .addField(`<:system:905535381334818897> systemebot`, ` *\`\`\`Bot that has all the commands that any server need all in one bot \`\`\`*`,true)
    .addField(`<:wlc:905547758293897216> welcomebot`, ` *\`\`\`Bot that sends a welcome message/attachment when a member join your server\`\`\`*`,true)
    .addField(`<:bc:905535373659217980> broadcast`, ` *\`\`\`Send dm to all members\`\`\`*`,true)  
    .addField(`<:attentionbonesdeathskullicon8:905541861656121374> extrabot`, ` *\`\`\`ExtraBots (scam, hack, nuke...)\`\`\`*`,true)
    .addField(`🎟️  ticketbot`, ` *\`\`\`support bot, tickets, staff...\`\`\`*`,true)
    .addField('YassineHz social media', `\n > <:yt:905535382152683590> : [Subscribe Here](https://www.youtube.com/channel/UC2v_vSrvAMNqcNoKoxnk6ag)
    > <:link:905535377899663400> : [Discord Here](https://discord.com/invite/SaGrHxfjwT)
    `)
    .setFooter('⚠️ Buttons can be slow sometimes')



    if (button.id === "1") {
      const embed = new MessageEmbed()
      .setTitle('<:bd:905535375555063871> Uptime bots')
      .setColor('#ffffff')
      .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click here\`](https://replit.com/@salimlengliz/YassineHz-Uptimer-v1)*`)
      button.message.edit(embed)
      button.reply.defer()
    }
        if (button.id === "2") {
      const embed = new MessageEmbed()
      .setTitle('<:music:905535378528796674> Music bots')
      .setColor('#ffffff')
      .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click here\`](https://replit.com/@salimlengliz/Music-Bot-00)*      
      > <:link:905535377899663400>- *V2 : [\`Click here\`](https://replit.com/@salimlengliz/YassineHz-Music-v2-0)*
     > <:link:905535377899663400>- *V3 : [\`Click here\`](https://replit.com/@salimlengliz/Music-Bot-v3)*
     > <:link:905535377899663400>- *V4: [\`Click here\`](https://replit.com/@rapgod8112006/Music-Bot-v4)*
     > <:link:905535377899663400>- *V5 : [\`Click here\`](https://replit.com/@rapgod8112006/Music-Bot-Stay-Vc-v5)*
     > <:link:905535377899663400>- *V6 : [\`Click here\`](https://replit.com/@rapgod8112006/Music-Bot-v6)*
     > <:link:905535377899663400>- *V7 : [\`Click here\`](https://replit.com/@Ameen-Tn/Musicord)*
     `)
     
     //
      button.message.edit(embed)
      button.reply.defer()
    }
        if (button.id === "3") {
      const embed = new MessageEmbed()
      .setTitle('<:comm:905535376477790238> Chat bots')
      .setColor('#ffffff')
      .setDescription(`**Avalaible versions**
         > <:link:905535377899663400>- *V1 : [\`Click here\`](https://replit.com/@rapgod8112006/Chat-Bot-YassineHz-v1)*
         > <:link:905535377899663400>- *V2 : [\`Click here\`](https://replit.com/@Ameen-Tn/Chat-bot-v2)*`)
   button.message.edit(embed)
      button.reply.defer()
    }
        if (button.id === "4") {
      const embed = new MessageEmbed()
      .setTitle('<:spin:905535380193951744> Spin Bots')
       .setColor('#ffffff')
      .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click here\`](https://replit.com/@rapgod8112006/Spin-To-Win-Bot-v1-By-YassineHz)*`)  
      button.reply.defer()
      button.message.edit(embed)
  //
    }
        if (button.id === "5") {
      const embed = new MessageEmbed()
      .setTitle('<:system:905535381334818897> System bots')
      .setColor('#ffffff')
      .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click here\`](https://replit.com/@salimlengliz/Sys-Bot-By-YassineHz-v01)*
      > <:link:905535377899663400>- *V2 : [\`Click here\`](https://replit.com/@rapgod8112006/system-bot-v3)*
      > <:link:905535377899663400>- *V3 : [\`Click here\`](https://replit.com/@rapgod8112006/System-bot-100command)*
      > <:link:905535377899663400>- *V4 : [\`Click here\`](https://replit.com/@salimlengliz/system-v4)*
      > <:link:905535377899663400>- *V5 : [\`Click here\`](https://replit.com/@salimlengliz/systembot-v5)*
      > <:link:905535377899663400>- *V6 : [\`Click here\`](https://replit.com/@salimlengliz/Systemv6-Dyno-600#commands/)*
      > <:link:905535377899663400>- *V7 : [\`Click here\`](https://sub2unlock.com/ZAEzL)*`)

      //
      //
      button.message.edit(embed)
      button.reply.defer()
    }//
        if (button.id === "6") {
      const embed = new MessageEmbed()
      .setTitle('<:wlc:905547758293897216> Welcome bots')
      .setColor('#ffffff')
      .setDescription(`**Avalaible version**
      *> <:link:905535377899663400>- V1 : [\`Click here\`](https://replit.com/@salimlengliz/Welcome-Bot-v1)*`)
      button.message.edit(embed)
      button.reply.defer()
    }

       if (button.id === "8") {
      const embed = new MessageEmbed()
      .setTitle('<:bc:905535373659217980> Broadcast')
      .setColor('#ffffff')
            .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click Here\`](https://replit.com/@rapgod8112006/Broadcast-Bot)*
      > <:link:905535377899663400>- *V2 : [\`Click Here\`](https://sub2unlock.com/ZLB4e)*`)
      button.message.edit(embed)
      button.reply.defer()
}//
        if (button.id === "9") {
      const embed = new MessageEmbed()
      .setTitle('<:attentionbonesdeathskullicon8:905541861656121374> Extra bots')
      .setColor('#ffffff')
            .setDescription(`**Avalaible bots**
      > <:link:905535377899663400>- *TownBot Script : [\`Click Here\`](https://replit.com/@salimlengliz/townbot-project-birdyt)*`)
      button.message.edit(embed)
      button.reply.defer()
    }

            if (button.id === "99") {
      const embed = new MessageEmbed()
      .setTitle('🎟️ Ticket bots')
      .setColor('#ffffff')
            .setDescription(`**Avalaible versions**
      > <:link:905535377899663400>- *V1 : [\`Click Here\`](https://sub2unlock.com/IWlVE)*`)
      button.message.edit(embed)
      button.reply.defer()
    }

        if (button.id === "home") {
      button.message.edit(home)
      button.reply.defer()
    }
    
    });

client.errorembed = function errorembed(message, msg){
  const embed = new MessageEmbed()
  .setDescription(`> :x: *\`${msg}\`*`)
  .setColor(client.config.error_color)
  message.channel.send(embed)
}


// all logs

const log_channel = '914908852103839785'
const guild = '755494496631783554'


client.on("channelCreate", function(channel){
  if(channel.guild.id !== guild) return;
   client.channels.cache.get(log_channel).send({embed : {
     title : `<:4916badlydrawnediticon:914596567669948477> | Channel Create `,
     description : `New **${channel.type.toUpperCase()}** channel Have been created : **${channel.name.toUpperCase()}**`,
     color : `#B9BBBE`,
     timestamp : new Date()
   }})
});
client.on("channelDelete", function(channel){
    if(channel.guild.id !== guild) return;

       client.channels.cache.get(log_channel).send({embed : {
     title : `<:5718badlydrawndeleteicon:914440748169048074> | Channel Delete`,
     description : `New **${channel.type.toUpperCase()}** channel Have been deleted : **${channel.name.toUpperCase()}**`,
     color : `#F34A47`,
     timestamp : new Date()
   }})
});
client.on("channelUpdate", function(oldChannel, newChannel){
    if(oldChannel||newChannel.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:4728badlydrawnupdateicon:914441177812598804> | Channel Update`,
     description : `**${oldChannel.name.toUpperCase()}** Name have been changed to : **${newChannel.name.toUpperCase()}**`,
     color : `#35B785`,
     timestamp : new Date()
   }})
});
client.on("emojiCreate", function(emoji){
    if(emoji.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:3057badlydrawnreactionicon:914599283905400882> | Emoji Create`,
     description : `A new **EMOJI** have been added **\`:${emoji.name}:\`**`,
     color : `#B9BBBE`,
     thumbnail : {
       url : emoji.url
     },
     timestamp : new Date()
   }})
});
client.on("emojiDelete", function(emoji){
    if(emoji.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:5718badlydrawndeleteicon:914440748169048074> | Emoji Delete`,
     description : `New **EMOJI** have been deleted **\`:${emoji.name}:\`**`,
     thumbnail : {
     url : emoji.url
     },
     color : `#F34A47`,
     timestamp : new Date()
   }})
});
client.on("messageDelete", function(message){
    if(message.guild.id !== guild) return;

  if(message.author.bot) return;
           client.channels.cache.get(log_channel).send({embed : {
     title : `<:5718badlydrawndeleteicon:914440748169048074> | Message Delete`,
     description : `New **MESSAGE** have been deleted\nBy : ${message.author}\nIn : ${message.channel}\n\`\`\`${message.content}\`\`\``,
     color : `#F34A47`,
     timestamp : new Date()
   }})
});
client.on("roleCreate", function(role){
    if(role.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:4916badlydrawnediticon:914596567669948477> | Role Create`,
     description : `New **ROLE** have been created : **${role.name.toUpperCase()}**`,
     color : `#B9BBBE`,
     timestamp : new Date()
   }})
});
client.on("roleDelete", function(role){
    if(role.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:5718badlydrawndeleteicon:914440748169048074> | Role Delete`,
     description : `New **ROLE** have been deleted : **${role.name.toUpperCase()}**`,
     color : `#F34A47`,
     timestamp : new Date()
   }})
});
client.on("roleUpdate", function(oldRole, newRole){
    if(oldRole||newRole.guild.id !== guild) return;

           client.channels.cache.get(log_channel).send({embed : {
     title : `<:4728badlydrawnupdateicon:914441177812598804> | Role Update`,
     description : `**${oldRole.name.toUpperCase()}** Name have been changed to : **${newRole.name.toUpperCase()}**`,
     color : `#35B785`,
     timestamp : new Date()
   }})
});



client.on('message', async message=>{
  if(message.channel.id == '914431252285771807') {
    await message.react('👍')
    await message.react('👎')
  }
})

///////

client.login(process.env.token)
//i think from replit


// ANOTHER SECTION 




