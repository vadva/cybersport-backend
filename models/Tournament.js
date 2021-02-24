const {model} = require('mongoose');
const tournamentSchema = require("../schemas/tournamentSchema");

module.exports = model('Tournament', tournamentSchema);