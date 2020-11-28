const fs = require("fs");
const moment = require("moment");
const { DB_DATA_ROOT_PATH } = require("../../const");

const USERS_JSON_PATH = DB_DATA_ROOT_PATH + "users.json";

const Users = {
  registered: [],
  init() {
    this.fetchJsonAndLoad();
  },
  isRegistered(id) {
    return this.registered.filter((user) => user.id === id).length > 0;
  },
  registerUser({ id, firstName, lastName, username }) {
    if (this.isRegistered(id)) return;
    this.registered.push({
      id,
      firstName,
      lastName,
      username,
      registeredAt: moment(),
    });
    this.updateJson();
  },
  getRegisteredById(id) {
    return this.registered.filter((user) => user.id === id)[0];
  },
  getRegisteredIds() {
    return this.registered.map((user) => user.id);
  },
  enableNotifications(id) {
    this.getRegisteredById(id).enableNotifications = true;
    this.updateJson();
  },
  disableNotifications(id) {
    this.getRegisteredById(id).enableNotifications = false;
    this.updateJson();
  },
  fetchJson() {
    if (!fs.existsSync(USERS_JSON_PATH)) {
      fs.writeFileSync(USERS_JSON_PATH, "[]");
    }
    return JSON.parse(fs.readFileSync(USERS_JSON_PATH));
  },
  fetchJsonAndLoad() {
    this.registered = this.fetchJson();
  },
  updateJson() {
    fs.writeFileSync(USERS_JSON_PATH, JSON.stringify(this.registered));
    this.fetchJsonAndLoad();
  },
};

Users.init();

module.exports = Users;
