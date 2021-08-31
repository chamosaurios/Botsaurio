const Discord = require('discord.js.old')
const client = new Discord.Client();
const config = require("./config.json"); 
const keepAlive = require("./server");
const command = require('./command')

//muestra en consola si se logro la conexión
client.on("ready", ()=>{
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity(config.statusBOT)

  command(client, "ping", message =>{
    message.channel.send("pong 🏓!!")
  })

  command(client, "test", message =>{
    message.channel.send("Esto es un test!!")
  })

})



keepAlive();
client.login(process.env["TOKEN"])