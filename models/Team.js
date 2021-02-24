const {model} = require('mongoose');
const teamSchema = require("../schemas/teamSchema");

module.exports = model('Team', teamSchema);