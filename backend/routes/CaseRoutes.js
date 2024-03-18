const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    addCase,
    updateCase,
    deleteCase,
    searchCase
} = require("../controllers/NewCase");
const {
    addClue,
    updateClue,
    deleteClue,
    searchClue
} = require("../controllers/NewClue");
const {
    addPerson,
    updatePerson,
    deletePerson,
    searchPerson
} = require("../controllers/NewPerson");
const {
    getCaseById,
    getClueById,
    getPersonById,
    getClueAndPersonById
} = require("../controllers/GetAll");


const { auth } = require("../middlewares/auth");

//Route for user signup
router.post("/addCase", auth, addCase);
router.post("/updateCase",auth, updateCase);
router.post("/deleteCase",auth, deleteCase);
router.post("/addClue",auth, addClue);
router.post("/updateClue",auth, updateClue);
router.post("/deleteClue",auth, deleteClue);
router.post("/addPerson",auth, addPerson);
router.post("/updatePerson",auth, updatePerson);
router.post("/deletePerson",auth, deletePerson);
router.get("/getCase", auth, getCaseById);
router.post("/getClue", getClueById);
router.post("/getPerson", getPersonById);
router.get("/searchCase", searchCase);
router.get("/searchClue", searchClue);
router.get("/searchPerson", searchPerson);
router.get("/getTimeline", getClueAndPersonById);

module.exports = router