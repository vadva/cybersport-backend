const Tournament = require("../../models/Tournament");
const { getOneController } = require("../../controllers");


const getOneTournament = (app) => {
  app.get("/tournaments/:id", async (req, res) => {
    const { id } = req.params;
    getOneController(id, res, Tournament);
  });
};

module.exports = getOneTournament;
