const fs = require("fs");
const { DB_DATA_ROOT_PATH } = require("../../const");

const TASKS_JSON_PATH = DB_DATA_ROOT_PATH + "tasks.json";

const Tasks = {
  allTasks: [],
  init() {
    this.fetchJsonAndLoad();
  },
  taskExists(id) {
    return this.allTasks.filter((task) => task.id === id).length > 0;
  },
  removeTask(id) {
    if (!this.taskExists(id)) return;
    const taskIdx = this.allTasks.findIndex((task) => task.id === id);
    this.allTasks.splice(taskIdx, 1);
    this.updateJson();
  },
  fetchJson() {
    if (!fs.existsSync(TASKS_JSON_PATH)) {
      fs.writeFileSync(TASKS_JSON_PATH, "[]");
    }
    return JSON.parse(fs.readFileSync(TASKS_JSON_PATH));
  },
  fetchJsonAndLoad() {
    this.allTasks = this.fetchJson();
  },
  updateJson() {
    fs.writeFileSync(TASKS_JSON_PATH, JSON.stringify(this.allTasks));
    this.fetchJsonAndLoad();
  },
};

Tasks.init();

module.exports = Tasks;
