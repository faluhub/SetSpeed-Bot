const Discord = require("discord.js");

const Command = require("./Command.js");
const Event = require("./Event.js");
const intents = new Discord.Intents(32767);
const config = require("../data/config.json");
const fs = require("fs");

class Bot extends Discord.Client {
    constructor() {
        super({
            intents: [
                Discord.Intents.FLAGS.GUILD_MESSAGES,
                Discord.Intents.FLAGS.GUILDS
            ],
            allowedMentions: {
                repliedUser: false
            }
        });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection
        this.prefix = config.prefix;
    }

    start(token) {
        fs.readdirSync("./src/commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                const commands = require(`../commands/${file}`);

                commands.forEach(command => {
                    console.log(`Command '${command.name}' loaded.`);
                    this.commands.set(command.name, command);
                });
            });
        fs.readdirSync("./src/events")
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
            /**
             * @type {Event}
             */
            const event = require(`../events/${file}`);
            
            console.log(`Event '${event.event}' loaded.`);
            this.on(event.event, event.run.bind(null, this));
        });
                
        this.login(token);
    }

    /**
     * @param {Discord.Message} message
     * @param {Command} command
     */
    SendHelpEmbed(message, command) {
        const Embed = new Discord.MessageEmbed({
            title: `Command: ${command.name}`,
            color: "BLUE",
            description: `**Description:** ${command.description}\n**Usage:** ${this.prefix}${command.usage}\n**Example:**\n\`\`\`\n${command.example}\n\`\`\``,
            footer: {
                text: `Issued by: ${message.author.username}`,
                iconURL: message.author.avatarURL()
            },
            timestamp: message.createdTimestamp
        });
        if (command.permission !== null) {
            const obj = {};

            for (var flag in Discord.Permissions.FLAGS) {
                obj[flag] = flag.toLowerCase().replace("_", " ");
            }

            Embed.setDescription(Embed.description + `\n**Permissions:** ${obj[command.permission]}`);
        };

        message.reply({ embeds: [Embed] });
    };

    /**
     * @param {Discord.Message} message
     * @param {String} err
     */
    SendErrorEmbed(message, err) {
        const Embed = new Discord.MessageEmbed({
            title: "Error!",
            color: "RED",
            description: err,
            footer: {
                text: `Issued by: ${message.author.username}`,
                iconURL: message.author.avatarURL()
            },
            timestamp: message.createdTimestamp
        });

        message.reply({ embeds: [Embed] });
    }
}

module.exports = Bot;