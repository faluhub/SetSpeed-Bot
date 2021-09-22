const Discord = require("discord.js");
const Command = require("../structures/Command.js");

const servers = [
    { name: "Offical MCSR Server", value: "[Join here!](https://discord.com/invite/jmdFn3C)" },
    { name: "SSG 1.9+ Server", value: "[Join here!](https://discord.com/invite/EFvygzt)" },
    { name: "pikaJ's Discord Server", value: "[Join here!](https://discord.gg/FMRaGhD8nc)" },
    { name: "TWT's Discord Server", value: "[Join here!](https://discord.gg/YCF6hDV4Tj)" }
];

module.exports = [
    new Command({
        name: "Credit",
        description: "Displays the developers of this bot.",
        permission: null,
        usage: "credit",
        example: "credit",
        needsArgs: false,

        async run(message, args, bot) {
            await message.reply("This bot was created by Wurgo and Nick1.");
        }
    }),
    new Command({
        name: "Servers",
        description: "Displays a list of reccomended speedrunning Discord servers.",
        permission: null,
        usage: "servers",
        example: "servers",
        needsArgs: false,

        async run(message, args, bot) {
            const Embed = new Discord.MessageEmbed({
                title: this.name,
                color: "ORANGE",
                footer: {
                    text: `Issued by: ${message.author.username}`,
                    iconURL: message.author.avatarURL()
                },
                timestamp: message.createdTimestamp,
                fields: servers
            });

            await message.reply({ embeds: [Embed] });
        }
    }),
    new Command({
        name: "Help",
        description: "Displays a list of commands.",
        permission: null,
        usage: "help [command]",
        example: "help\nhelp servers",
        needsArgs: false,

        async run(message, args, bot) {
            if (args.length > 0) {
                const command = bot.commands.find(cmd => cmd.name.toLowerCase() === args[0].toLowerCase());

                if (command) {
                    return bot.SendHelpEmbed(message, command);
                } else {
                    return bot.SendErrorEmbed(message, `\`${args[0]}\` is not a valid command!`);
                }
            }
            var description = "";
            bot.commands.find(cmd => {
                if (!(cmd.hidden)) {
                    try {
                        if (!(cmd.name in description)) {
                            description += `\`${cmd.name}\`, `;
                        }
                    } catch(e) {
                        description += `\`${cmd.name}\`, `;
                    }
                }
            });

            const Embed = new Discord.MessageEmbed({
                title: this.name,
                color: "BLUE",
                description: description.slice(0, description.length - 2),
                footer: {
                    text: `Issued by: ${message.author.username}`,
                    iconURL: message.author.avatarURL()
                },
                timestamp: message.createdTimestamp
            });

            await message.reply({ embeds: [Embed] });
        }
    })
]