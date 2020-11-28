const Extra = require("telegraf/extra");
const momentCalculations = require("../../utils/momentCalculations");

const weeksHandler = (ctx) => {
  ctx.reply(
    `Faltam apenas *${momentCalculations.weeksLeft()} semanas* para Miami!`,
    Extra.markdown()
  );
};

module.exports = weeksHandler;
