const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    addCase,
} = require("../controllers/NewCase");


const {auth} = require("../middlewares/auth");

//Route for user signup
router.post("/addCase",auth, addCase);

module.exports = router