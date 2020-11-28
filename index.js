require("dotenv").config();
const bot = require("./bot");
const handlers = require("./bot/handlers");
const enableDailyNotifications = require("./utils/notifications");

bot.start(handlers.start);

bot.command("projetos", handlers.projects);
bot.command("tarefas", handlers.tasks);
bot.command("dias", handlers.days);
bot.command("semanas", handlers.weeks);
bot.command("off", handlers.disableNotifications);
bot.command("on", handlers.enableNotifications);

bot.help(handlers.help);

enableDailyNotifications();

bot.launch();

console.log("Bot is running!");
