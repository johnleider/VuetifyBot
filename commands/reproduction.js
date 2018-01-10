exports.run = async (client, message, args, level) => {
    let member = message.mentions.members.first();
    let msg;

    if(member) {
        msg = `${member}, please provide a reproduction environment.`;
    } else {
        msg = `Please provide a reproduction environment.`;
    }

    msg += ` You can find a codepen template at <${client.config.defaultSettings.codepenURL}>.`
    
    if (client.config.defaultSettings.allowDeleteMessages === "true" && message.guild.me.hasPermission('MANAGE_MESSAGES')) {
        message.delete()
            .catch(err => {
                client.log("error", err, " Repro Command")
            });
    } else {
        if (client.config.defaultSettings.allowDeleteMessages === "true") client.log("log", "No permission to delete message", "Command");
    }

    let channelID;

    if (args[1]) {
        channelID = message.guild.channels.find('name', args[1]);
    }

    if (channelID) {
        channelID.send(msg);
    } else {
        message.channel.send(msg);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["r"],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "repro",
    category: "Mod",
    description: "Let a user know they need to provide a test environment.",
    usage: "repro"
  };
  