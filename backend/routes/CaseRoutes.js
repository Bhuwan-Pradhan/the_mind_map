const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    addCase,
} = require("../controllers/NewCase");
const {
    addClue,
} = require("../controllers/NewClue");


const {auth} = require("../middlewares/auth");

//Route for user signup
router.post("/addCase",auth, addCase);
router.post("/addClue", addClue);

module.exports = router