const Case = require("../models/CaseModel");
const User = require("../models/UserModel");
const Clue = require("../models/ClueModel");
const Person = require("../models/PersonModel");
const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addCase = async (req, res) => {
    try {
        // fetch data from request body 
        const { name, description, place } = req.body;
        const user = req.user.id;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        console.log(media_type)
        const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);

        const newCase = new Case({
            user: user,
            name: name,
            description: description,
            place: place,
            image: file.secure_url

        });

        // save the new comment object into the db 
        const savedCase = await newCase.save();

        // Find the Post By Id and the new comment to its comment array 
        const updatedUser = await User.findByIdAndUpdate(user, { $push: { case: savedCase._id } },
            { new: true })
            .populate("case") //Populates the comment array with the comments document
            .exec();

        res.json({
            user: updatedUser,
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            error: "Error while creating case",

        })
    }
}
exports.updateCase = async (req, res) => {
    try {
        const { caseId, name, description, place } = req.body;
        const files = req.files;
        let fileUrl;
        if (files.displayFile) {
            const displayFile=files.displayFile;
            const media_type = req.files.displayFile.mimetype;
            const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
            fileUrl = file.secure_url;
        }

        let updateFields = {
            name: name,
            description: description,
            place: place
        };

        if (fileUrl) {
            updateFields.image = fileUrl;
        }
        const updatedCase = await Case.findByIdAndUpdate(caseId, updateFields);
        res.json({
            case: updatedCase,
        });
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            error: "Error While Updating Case",
            message: err.message,
        });
    }
};

exports.deleteCase = async (req, res) => {

    const { caseId } = req.body;

    const caseOBJ = await Case.findById(caseId);

    if (!caseOBJ) {
        console.log("Case not found");
        return;
    }

    
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { $pull: { case: caseId } },
            { new: true }
        );
        console.log("User updated:", user);
    } catch (error) {
        console.error("Error updating user:", error);
    }


    try {
        await Clue.deleteMany({ case: caseId });
        await Person.deleteMany({ case: caseId });
        const deletedCase = await Case.findByIdAndDelete(caseId);
        console.log("Deleted case:", deletedCase);
        res.json({ success: true, message: "Deleted Case successfully" });
    } catch (error) {
        console.error("Error deleting case:", error);
    }

}