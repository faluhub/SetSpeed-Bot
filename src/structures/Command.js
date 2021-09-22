const Discord = require("discord.js");
const Bot = require("./Bot.js");

/**
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {Bot} bot
 */
function RunFunction(message, args, bot) {}

class Command {
    /**
     * @typedef {{name: string, description: string, permission: Discord.PermissionString, hidden: boolean, usage: string, example: string, needsArgs: boolean, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.permission = options.permission;
        this.hidden = options.hidden || false;
        this.usage = options.usage;
        this.example = options.example;
        this.needsArgs = options.needsArgs;

        this.run = options.run;
    }
}

module.exports = Command;