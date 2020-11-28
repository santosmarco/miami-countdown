const moment = require("moment");
const { TARGET_MOMENT } = require("../const");

const difference = (targetMoment, measurement) =>
  targetMoment.diff(moment(), measurement);

const daysLeft = (targetMoment = TARGET_MOMENT) =>
  difference(targetMoment, "days");

const weeksLeft = (targetMoment = TARGET_MOMENT) =>
  difference(targetMoment, "weeks");

module.exports = {
  daysLeft,
  weeksLeft,
};
