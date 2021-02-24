const Team = require("../../models/Team");
const { updateOneController } = require("../../controllers");

const updateOneTeam = (app) => {
  app.put("/Teams/:id", async (req, res) => {
    const { id } = req.params;
    updateOneController(id, req.body, res, Team);
  });
};

module.exports = updateOneTeam;