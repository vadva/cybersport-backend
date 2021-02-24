const Tournament = require("../../models/Tournament");
const { updateOneController } = require("../../controllers");

const updateOneTournament = (app) => {
  app.put("/tournaments/:id", async (req, res) => {
    const { id } = req.params;
    updateOneController(id, req.body, res, Tournament);
  });
};

module.exports = updateOneTournament;