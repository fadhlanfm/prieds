var moment = require('moment-timezone');
moment().tz('Asia/Jakarta').format();

module.exports = () => {
  return moment().format('MM/DD/YYYY, h:mm:ssA');
};