const Extra = require("telegraf/extra");
const momentCalculations = require("../../utils/momentCalculations");
const { BOT_COMMANDS } = require("../../const");

const helpHandler = (ctx) => {
  let message = "🙋  Help!\n\n*Comandos:*\n";

  message += BOT_COMMANDS.map(
    (comm) => `  _/${comm.command}_ – ${comm.description}`
  ).join("\n");

  message += `\n\n_⚠️  E para que você nunca se esqueça: faltam apenas _*${momentCalculations.weeksLeft()} semanas*_ para Miami!_`;

  ctx.reply(message, Extra.markdown());
};

module.exports = helpHandler;
