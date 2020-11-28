const moment = require("moment");

const DB_DATA_ROOT_PATH = "./db/data/";

const TARGET_MOMENT = moment("2022-10-13");

const BOT_COMMANDS = [
  { command: "projetos", description: "Mostra os projetos em andamento" },
  { command: "tarefas", description: "Mostra as tarefas em andamento" },
  { command: "dias", description: "Mostra quantos dias faltam para a viagem" },
  {
    command: "semanas",
    description: "Mostra quantas semanas faltam para a viagem",
  },
  {
    command: "off",
    description: "Desabilita o envio automático de mensagens",
  },
  {
    command: "on",
    description: "Habilita o envio automático de mensagens",
  },
];

module.exports = {
  TARGET_MOMENT,
  DB_DATA_ROOT_PATH,
  BOT_COMMANDS,
};
