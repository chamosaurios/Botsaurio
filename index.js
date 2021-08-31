const Discord = require('discord.js.old')
const client = new Discord.Client();
const config = require("./config.json"); 
const keepAlive = require("./server");
//agregación del objeto prefix
const prefix = config.prefix; 

//muestra en consola si se logro la conexión
client.on("ready", ()=>{
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {

  //evita contestar mensajes de bots
  if(message.channel.type == 'dm') return;
  if(message.author.bot) return;
  if(!message.content.starsWith(prefix)) return;

  if(msg.content === `${prefix}ping` ){
    msg.channel.send("pong 🏓!!")
  }

  if(msg.content === `${prefix}help` ){

  }
})

keepAlive();
client.login(process.env["TOKEN"])