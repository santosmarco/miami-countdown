const Extra = require("telegraf/extra");
const { Users } = require("../../db");

const enableNotificationsHandler = (ctx) => {
  const userId = ctx.update.message.from.id;
  const firstName = ctx.update.message.from.first_name;
  Users.enableNotifications(userId);
  ctx.reply(
    `Pronto, ${firstName}! Notificações *habilitadas*!`,
    Extra.markdown()
  );
};

module.exports = enableNotificationsHandler;
