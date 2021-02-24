const Team = require("../../models/Team");
const { addOneController } = require("../../controllers");

const addOneTeam = (app) => {
  app.post("/Teams", async (req, res) => {
    const newTeam = new Team(req.body);
    addOneController(res, newTeam);
  });
};

module.exports = addOneTeam;
