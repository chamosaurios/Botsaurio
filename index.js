const Discord = require('discord.js.old')
const client = new Discord.Client()
const config = require("./config.json"); //referencia el archivo config.json

//agregación del objeto prefix
const prefix = config.prefix; 

//muestra en consola si se logro la conexión
client.on("ready", ()=>{
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {

  //evita contestar mensajes de bots
  if(message.author.bot) return;

  if(msg.content === `${prefix}ping` ){
    msg.channel.send("pong 🏓!!")
  }

  if(msg.content === `${prefix}help` ){
    msg.channel.send("En desarrollo disculpa 😅")
  }


})


client.login(process.env["TOKEN"])