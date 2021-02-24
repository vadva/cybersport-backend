const getAllTournaments = require('./getAllTournaments');
const addOneTournament = require('./addOneTournament');
const deleteOneTournament = require('./deleteOneTournament');
const getOneTournament = require('./getOneTournament');
const updateOneTournament = require('./updateOneTournament');

module.exports = (app) => {
    getAllTournaments(app);
    addOneTournament(app);
    deleteOneTournament(app);
    getOneTournament(app);
    updateOneTournament(app);
};