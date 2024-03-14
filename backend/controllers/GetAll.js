const Case = require("../models/CaseModel");

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