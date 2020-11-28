const Extra = require("telegraf/extra");
const momentCalculations = require("../../utils/momentCalculations");

const daysHandler = (ctx) => {
  ctx.reply(
    `Faltam apenas *${momentCalculations.daysLeft()} dias* para Miami!`,
    Extra.markdown()
  );
};

module.exports = daysHandler;
