const Command = require("../structures/Command.js");

let challengeSeed = null;
let eventSeed = null;

module.exports = [
    new Command({
        name: "Seed",
        description: "Displays the current event seed.",
        permission: null,
        usage: "seed",
        example: "seed",
        needsArgs: false,

        async run(message, args, bot) {
            var msg = "";

            if (eventSeed) {
                msg += `The current event seed is: ${eventSeed}`;
            }
            if (challengeSeed) {
                msg += `\nThe current challenge seed is: ${challengeSeed}`
            }
            if (msg === "") {
                return await message.reply("There are currently no seeds available. Check back later!");
            }
            return await message.reply(msg);
        }
    }),
    new Command({
        name: "SetSeed",
        description: "Sets the current event seed",
        permission: "MANAGE_GUILD",
        hidden: true,
        usage: "setseed <type> <seed>",
        example: "setseed event WurgoAndNickAreSoSexyAndHot\nsetseed challenge BlayzarAndRivenAreSoSexyAndHot",
        needsArgs: true,

        async run(message, args, bot) {
            const type = args[0].toLowerCase();
            if (type === "event") {
                eventSeed = args[1];
            } else if (type === "challenge") {
                challengeSeed = args[1];
            } else {
                return bot.SendErrorEmbed(message, `${args[0]} is not a valid type. Choose either \`event\` or \`challenge\``);
            }

            await message.reply(`The ${type} seed has been replaced with: ${args[1]}`);
        }
    })
]