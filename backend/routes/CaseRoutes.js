const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    addCase,
} = require("../controllers/NewCase");
const {
    addClue
} = require("../controllers/NewClue");
const {
    addPerson,
} = require("../controllers/NewPerson")


const {auth} = require("../middlewares/auth");

//Route for user signup
router.post("/addCase",auth, addCase);
router.post("/addClue", addClue);
router.post("/addPerson", addPerson);

module.exports = router