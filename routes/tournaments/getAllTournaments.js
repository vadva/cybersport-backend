const Tournament = require("../../models/Tournament");
const { getAllController } = require("../../controllers");

const getAllTournament = (app) => {
  app.get("/tournaments", async ({query}, res)=> {
    getAllController(query, res, Tournament);
    })
};

module.exports = getAllTournament;
