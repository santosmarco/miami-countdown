const { Users } = require("../../db");

const startHandler = (ctx) => {
  ctx.getChat().then((chat) => {
    const { id, username } = chat;
    const firstName = chat.first_name;
    const lastName = chat.last_name;
    const isRegistered = Users.isRegistered(id);

    ctx
      .reply(`👋  Olá, ${firstName}!`)
      .then(() =>
        ctx.reply(
          `Seja bem-vindo(a)${
            isRegistered ? " de volta " : " "
          }ao Miami Countdown Bot!`
        )
      )
      .then(() => {
        if (!isRegistered) {
          Users.registerUser({ id, firstName, lastName, username });
          ctx.reply("Seu cadastro foi realizado com sucesso!");
        }
      });
  });
};

module.exports = startHandler;
