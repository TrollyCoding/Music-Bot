const discord = require("discord.js")
module.exports = {
  name: "help",
  alias:["h","?","commandlist","cmd","cmdlist"],
  description: "Show list of bot's commands",
  run: async(client, msg, args) => {
     const helpembed = new discord.MessageEmbed()
     .setTitle(client.user.username + " Command List")
     .setDescription(`Trolly#3050`)
     client.commands.map(cmd =>{
       helpembed.addField(`${cmd.name} (${cmd.alias})`, cmd.description)
     })
     helpembed.setColor("RANDOM")
     .setFooter("© Trolly#3050")
     msg.channel.send(helpembed);
  }
}