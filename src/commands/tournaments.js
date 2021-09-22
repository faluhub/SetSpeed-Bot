const Command = require("../structures/Command.js");

let seed = null;

module.exports = [
    new Command({
        name: "Seed",
        description: "Displays the current event seed.",
        permission: null,
        usage: "seed",
        example: "seed",
        needsArgs: false,

        async run(message, args, bot) {
            if (seed) {
                await message.reply(`The current seed is: ${seed}`);
            } else {
                await message.reply("There currently is no seed available. Come check back later!");
            }
        }
    }),
    new Command({
        name: "SetSeed",
        description: "Sets the current event seed",
        permission: "MANAGE_GUILD",
        hidden: true,
        usage: "setseed <seed>",
        example: "setseed WurgoAndNickAreSoSexyAndHot",
        needsArgs: true,

        async run(message, args, bot) {
            seed = args[0];

            await message.reply(`The seed has been replaced with: ${seed}`);
        }
    })
]