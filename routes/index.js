const tournamentRotes = require('./tournaments');
const teamRotes = require('./teams');

module.exports = (app) => {
    tournamentRotes(app);
    teamRotes(app);
};