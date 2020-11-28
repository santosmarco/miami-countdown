const Extra = require("telegraf/extra");
const moment = require("moment");
const bot = require("../bot");
const { Users } = require("../db");
const { daysLeft, weeksLeft } = require("./momentCalculations");

const notify = (userIds, messages) => {
  if (!Array.isArray(messages)) {
    messages = [messages];
  }
  userIds.forEach(async (id) => {
    if (!Users.getRegisteredById(id).enableNotifications) {
      return;
    }

    for (let i = 0; i < messages.length; i++) {
      await bot.telegram
        .sendMessage(id, messages[i], Extra.markdown())
        .catch((err) =>
          console.log("Error: the user may not be currently using the bot")
        );
    }
  });
};

const notifyDaily = () => {
  const userIds = Users.getRegisteredIds();
  const messages = [
    `🥳  *Oba!* Faltam apenas *${daysLeft()} dias* para Miami!`,
  ];
  const now = moment();
  const postingMoment = moment()
    .add(1, "d")
    .hour(9)
    .minute(0)
    .second(0)
    .millisecond(0);
  const timeDelay = postingMoment.diff(now);

  if (now.weekday() === 6) {
    messages.push(
      `📆  *Uhull!* Menos uma semana! Restam agora só ${weeksLeft()}!\n\n_Não se esqueça de atualizar o quadrinho!_`
    );
  }

  notify(userIds, messages);

  const timeoutId = setTimeout(() => {
    notifyDaily();
    clearTimeout(timeoutId);
  }, timeDelay);
};

const enableDailyNotifications = () => notifyDaily();

module.exports = enableDailyNotifications;
