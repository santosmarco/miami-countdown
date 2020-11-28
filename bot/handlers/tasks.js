const Extra = require("telegraf/extra");
const momentCalculations = require("../../utils/momentCalculations");
const { Tasks } = require("../../db");

const tasksHandler = (ctx) => {
  const message = ["Aqui estão as suas tarefas:\n\n"];

  message.push(
    Tasks.allTasks
      .map(
        (task, idx) =>
          `  *• ${(idx + 1).toString().padStart(2, "0")}:* ${task.name}`
      )
      .join("\n")
  );

  message.push(
    `\n\n_⚠️  E para que você nunca se esqueça: faltam apenas _*${momentCalculations.weeksLeft()} semanas*_ para Miami!_`
  );

  ctx
    .reply(message.join(""), Extra.markdown())
    .then(() => mainMenu.replyToContext(ctx));
};

module.exports = tasksHandler;
