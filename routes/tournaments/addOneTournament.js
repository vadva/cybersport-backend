const Tournament = require("../../models/Tournament");
const { addOneController } = require("../../controllers");

const addOneTournament = (app) => {
  app.post("/tournaments", async (req, res) => {
    const newTournament = new Tournament(req.body);
    addOneController(res, newTournament);
  });
};

module.exports = addOneTournament;
