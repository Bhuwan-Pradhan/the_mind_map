const Case = require("../models/CaseModel");
const Clue = require("../models/ClueModel");
const Person = require("../models/PersonModel");

exports.getCaseById = async (req, res) => {
    try {
        const user = req.user.id;
        const caseData = await Case.find({ user: user }).populate('user').sort({ createdAt: -1 }).exec();
        res.json({ success: true, data: caseData, });
    }
    catch (err) {
        return res.status(400).json({
            error: "Error While getting Cases",
            message: err.message
        })
    }
}

exports.getClueById = async (req, res) => {
    try {
        const { caseId } = req.body;
        const clueData = await Clue.find({ case: caseId }).populate('case').sort({ createdAt: -1 }).exec();
        res.json({ success: true, data: clueData, });
    }
    catch (err) {
        return res.status(400).json({
            error: "Error While getting Clue",
            message: err.message
        })
    }
}
exports.getPersonById = async (req, res) => {
    try {
        const { caseId } = req.body;
        const personData = await Person.find({ case: caseId }).populate('case').sort({ createdAt: -1 }).exec();
        res.json({ success: true, data: personData, });
    }
    catch (err) {
        return res.status(400).json({
            error: "Error While getting Clue",
            message: err.message
        })
    }
}


exports.getClueAndPersonById = async (req, res) => {
    try {
        const { caseId } = req.query;
        // Fetch clue and person data
        const clueData = await Clue.find({ case: caseId }).populate('case').sort({ createdAt: -1 }).exec();
        const personData = await Person.find({ case: caseId }).populate('case').sort({ createdAt: -1 }).exec();
        // Merge clue and person data into one array
        const mergedData = [...clueData, ...personData];

        res.json({ success: true, data: mergedData });
    } catch (err) {
        return res.status(400).json({
            error: "Error while getting Clue and Person data",
            message: err.message
        });
    }
};