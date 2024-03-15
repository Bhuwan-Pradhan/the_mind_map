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
} = require("../controllers/NewPerson");
const {
    getCaseById,
} = require("../controllers/GetAll");


const { auth } = require("../middlewares/auth");

//Route for user signup
router.post("/addCase", auth, addCase);
router.post("/addClue",auth, addClue);
router.post("/addPerson",auth, addPerson);
router.get("/getCase", auth, getCaseById);

module.exports = router