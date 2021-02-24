
const { deleteOneController } = require("../../controllers");
const Team = require("../../models/Team");


const deleteOneTeam = (app) => {
  app.delete("/Teams/:id", async (req, res) => {
    const { id } = req.params;
    deleteOneController(id, res, Team);
  });
};

module.exports = deleteOneTeam;
