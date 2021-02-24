const Team = require("../../models/Team");
const { getAllController } = require("../../controllers");

const getAllTeam = (app) => {
  app.get("/Teams", async ({query}, res)=> {
    getAllController(query, res, Team);
    })
};

module.exports = getAllTeam;
