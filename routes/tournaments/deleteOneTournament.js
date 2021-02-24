
const { deleteOneController } = require("../../controllers");
const Tournament = require("../../models/Tournament");


const deleteOneTournament = (app) => {
  app.delete("/tournaments/:id", async (req, res) => {
    const { id } = req.params;
    deleteOneController(id, res, Tournament);
  });
};

module.exports = deleteOneTournament;
