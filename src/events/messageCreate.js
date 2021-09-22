const Event = require("../structures/Event.js");
const Command = require("../structures/Command.js");

module.exports = new Event("messageCreate", (bot, message) => {
    if (!message.content.startsWith(bot.prefix)) return;
    if (message.author.bot) return;

    const commandName = message.content.substring(bot.prefix.length).split(/ +/)[0];
    const args = message.content.substring(bot.prefix.length).split(/ +/).splice(1);
    /**
     * @type {Command}
     */
    const command = bot.commands.find(cmd => cmd.name.toLowerCase() == commandName.toLowerCase());

    if (!command) return;
    if (command.needsArgs && args.length == 0) {
        bot.SendHelpEmbed(message, command);
    } else {
        if (!command.permission || message.member.permissions.has(command.permission)) {
            command.run(message, args, bot);
        } else {
            bot.SendErrorEmbed(message, "You do not have the correct permissions to run this command.");
        }
    }
});
