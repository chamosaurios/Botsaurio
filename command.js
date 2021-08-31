const config  = require("./config.json");
const prefix = config.prefix;

module.exports = (client, aliases, callback) =>{
  
  if(typeof aliases === 'string'){
    aliases = [aliases]
  }

  client.on('message', message =>{
    if(message.channel.type == 'dm') return;
    if(message.author.bot) return;

    const{ content } = message;
    aliases.forEach(alias =>{
      const command = `${prefix}${alias}`
      
        if(content === command){
          callback(message)
        }
    })

  })
}