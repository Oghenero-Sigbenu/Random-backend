const express = require("express");
const teamController = require("../controllers/team");

const router = express.Router();

router.post("/create", teamController.createTeam);


module.exports = router;