const Team = require("../../models/Team");
const { getOneController } = require("../../controllers");


const getOneTeam = (app) => {
  app.get("/Teams/:id", async (req, res) => {
    const { id } = req.params;
    getOneController(id, res, Team);
  });
};

module.exports = getOneTeam;
