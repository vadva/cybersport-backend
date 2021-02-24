const getAllTeam = require('./getAllTeam');
const addOneTeam = require('./addOneTeam');
const deleteOneTeam = require('./deleteOneTeam');
const getOneTeam = require('./getOneTeam');
const updateOneTeam = require('./updateOneTeam');

module.exports = (app) => {
    getAllTeam(app);
    addOneTeam(app);
    deleteOneTeam(app);
    getOneTeam(app);
    updateOneTeam(app);
};