const Case = require("../models/CaseModel");
const Clue = require("../models/ClueModel");

const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addClue = async (req, res) => {
    try {
        const { caseId, name, description, category } = req.body;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        console.log(media_type)
        const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
        const clue = new Clue({
            name: name,
            description: description,
            category: category,
            image: file.secure_url
        });

        const savedClue = await clue.save();

        const updatedCase = await Case.findByIdAndUpdate(
            caseId,
            { $push: { clue: savedClue._id } },
            { new: true }
        )
            .populate("clue")
            .exec();

        res.json({
            case: updatedCase,
            clue: savedClue,
        });
    } catch (err) {
        return res.status(400).json({
            error: "Error While Creating Clue",
            message: err.message,
        });
    }
};