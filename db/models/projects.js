const fs = require("fs");
const { DB_DATA_ROOT_PATH } = require("../../const");

const PROJECTS_JSON_PATH = DB_DATA_ROOT_PATH + "projects.json";

const Projects = {
  allProjects: [],
  init() {
    this.fetchJsonAndLoad();
  },
  fetchJson() {
    if (!fs.existsSync(PROJECTS_JSON_PATH)) {
      fs.writeFileSync(PROJECTS_JSON_PATH, "[]");
    }
    return JSON.parse(fs.readFileSync(PROJECTS_JSON_PATH));
  },
  fetchJsonAndLoad() {
    this.allProjects = this.fetchJson();
  },
  updateJson() {
    fs.writeFileSync(PROJECTS_JSON_PATH, JSON.stringify(this.allProjects));
    this.fetchJsonAndLoad();
  },
};

Projects.init();

module.exports = Projects;
