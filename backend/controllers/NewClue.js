const Case = require("../models/CaseModel");
const Clue = require("../models/ClueModel");

const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addClue = async (req, res) => {
    try {
        const { caseId, name, description, category } = req.body;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
        const clue = new Clue({
            case: caseId,
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


exports.updateClue = async (req, res) => {
    try {
        const { clueId, name, description, category } = req.body;
        const files = req.files;
        let fileUrl;
        if (files) {
            const displayFile = files.displayFile;
            const media_type = req.files.displayFile.mimetype;
            const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
            fileUrl = file.secure_url;
        }

        let updateFields = {
            name: name,
            description: description,
            category: category
        };

        if (fileUrl) {
            updateFields.image = fileUrl;
        }
        const updatedClue = await Clue.findByIdAndUpdate(clueId, updateFields);
        res.json({
            clue: updatedClue,
        });
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            error: "Error While Updating Clue",
            message: err.message,
        });
    }
};

exports.deleteClue = async (req, res) => {

    const { caseId, clueId } = req.body;

    const clue = await Clue.findById(clueId);

    if (!clue) {
        console.log("Clue not found");
        return;
    }


    try {
        const caseObj = await Case.findByIdAndUpdate(
            caseId,
            { $pull: { clue: clueId } },
            { new: true }
        );
        console.log("Case updated:", caseObj);
    } catch (error) {
        console.error("Error updating case:", error);
    }

    try {
        const deletedClue = await Clue.findByIdAndDelete(clueId);
        console.log("Deleted clue:", deletedClue);
        res.json({ success: true, message: "Deleted Clue successfully" });
    } catch (error) {
        console.error("Error deleting clue:", error);
    }

}

exports.searchClue = async(req, res) => {
    try{
    const { date } = req.query; // Assuming date is provided as a query parameter
    console.log(date);
    // Construct a query to find cases created on the specified date
    const cases = await Clue.find({
      createdAt: {
        $gte: new Date(date), // Greater than or equal to the start of the specified date
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)) // Less than the start of the next day
      }
    });
    console.log(cases);
    res.json({data: cases});
  } catch (error) {
    console.error('Error searching for cases by date:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}