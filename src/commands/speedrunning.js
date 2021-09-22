const Discord = require("discord.js");
const Command = require("../structures/Command.js");

const maps = [
    { name: "Emma's End Practice (One Cycling):", value: "[Download here!](https://sites.google.com/view/emma-practice-map/home)" },
    { name: "JoeJoe's End Practice (Perches):", value: "[Download here!](https://github.com/jojoe77777/PerchPractice/releases/latest/download/PerchPractice.zip)" },
    { name: "Falsi's Blaze Practice", value: "[Download here!](http://www.mediafire.com/file/ktg2hb8ra1muqmp/Blaze+Fight+Practice.zip/file)" },
]

const mods = [
    { name: "1.16.1 Sodium", value: "[Download here!](https://github.com/mrmangohands/sodium-fabric/releases/tag/mc1.16.1-0.2.0%2Bbuild.17)" },
    { name: "1.16.1 Lithium", value: "[Download here!](https://github.com/mrmangohands/lithium-fabric/releases/tag/mc1.16.1-0.6.6)" },
    { name: "1.16.1 Phosphor", value: "[Download here!](https://github.com/mrmangohands/phosphor-fabric/releases/tag/mc1.16.1-0.7.2)" },
    { name: "1.16.1 Krypton", value: "[Download here!](https://github.com/mrmangohands/krypton/releases/tag/mc1.16.1-0.1.3-SNAPSHOT%2B2021-02-20)" },
    { name: "1.16.1 Fast Reset", value: "[Download here!](https://github.com/jan-leila/FastReset/releases/tag/1.16.1-1.4.0)" },
    { name: "1.16.1 Starlight (Not compatible with Phosphor)", value: "[Download here!](https://github.com/PaperMC/Starlight/releases/tag/1.0.0-RC2)" }
]

const extramods = [
    {name: "Pogloot", value: "[Download here!](https://github.com/AbyssStudios/PogLoot/releases/tag/v1.4.1)"},
    {name: "Icarus Mod", value: "[Download here!](https://github.com/DuncanRuns/Icarus-Mod/releases/download/v1.0.3)"},
    {name: "HHH Mod", value: "[Download here!](https://github.com/DuncanRuns/HalfHeartHardcore-Mod/releases)"},
    {name: "InfiPearl", value: "[Download here!](https://github.com/DuncanRuns/InfiniPearl/releases)"}
]

module.exports = [
    new Command({
        name: "Maps",
        description: "Displays a list of minecraft maps you can use to practice.",
        permission: null,
        usage: "maps",
        example: "maps",
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
                fields: maps
            });

            await message.reply({ embeds: [Embed] });
        }
    }),
    new Command({
        name: "Mods",
        description: "Displays a list of minecraft mods used for speedrunning.",
        permission: null,
        usage: "mods",
        example: "mods",
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
                fields: mods
            });

            await message.reply({ embeds: [Embed] });
        }
    }),
    new Command({
        name: "Extramods",
        description: "Displays a list of exclusive mods used for speedrunning events.",
        permission: null,
        usage: "extramods",
        example: "extramods",
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
                fields: extramods
            });

            await message.reply({ embeds: [Embed] });
        }
    })
]