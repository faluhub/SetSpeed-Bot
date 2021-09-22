const Event = require("../structures/Event.js");
const consola = require("consola");

module.exports = new Event("ready", bot => {
    consola.ready({
        message: "The bot is ready!",
        badge: true
    });
});