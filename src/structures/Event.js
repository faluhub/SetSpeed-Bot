const Discord = require("discord.js");
const Bot = require("./Bot.js");

/**
 * @template {keyof Discord.ClientEvents} K
 * @param {Bot} bot 
 * @param {Discord.ClientEvents[K]} eventArgs 
 */
function RunFunction(bot, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {
    /**
     * @param {K} event 
     * @param {RunFunction<K>} runFunction 
     */
    constructor(event, runFunction) {
        this.event = event;
        this.run = runFunction;
    }
}

module.exports = Event;