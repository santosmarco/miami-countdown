const Extra = require("telegraf/extra");
const momentCalculations = require("../../utils/momentCalculations");
const { Projects } = require("../../db");

const projectsHandler = (ctx) => {
  const message = ["Aqui estão os seus projetos:\n\n"];

  message.push(
    Projects.allProjects
      .map(
        (project, idx) =>
          `  *• ${(idx + 1).toString().padStart(2, "0")}:* ${project.name}`
      )
      .join("\n")
  );

  message.push(
    `\n\n_⚠️  E para que você nunca se esqueça: faltam apenas _*${momentCalculations.weeksLeft()} semanas*_ para Miami!_`
  );

  ctx.reply(message.join(""), Extra.markdown());
};

module.exports = projectsHandler;
