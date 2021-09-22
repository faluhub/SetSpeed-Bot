// console.clear();

const Bot = require("./structures/Bot.js");
const config = require("./data/config.json");

new Bot().start(config.token);