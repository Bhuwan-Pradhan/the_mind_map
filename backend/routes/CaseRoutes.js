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
    getClueById,
    getPersonById
} = require("../controllers/GetAll");


const { auth } = require("../middlewares/auth");

//Route for user signup
router.post("/addCase", auth, addCase);
router.post("/addClue",auth, addClue);
router.post("/addPerson",auth, addPerson);
router.get("/getCase", auth, getCaseById);
router.post("/getClue", getClueById);
router.post("/getPerson", getPersonById);

module.exports = router