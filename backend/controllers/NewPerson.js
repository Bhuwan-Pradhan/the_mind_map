const Case = require("../models/CaseModel");
const Person = require("../models/PersonModel");

const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addPerson = async (req, res) => {
    try {
        const { caseId, name, description, profession } = req.body;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
        const person = new Person({
            case: caseId,
            name: name,
            description: description,
            profession: profession,
            image: file.secure_url
        });

        const savedPerson = await person.save();

        const updatedCase = await Case.findByIdAndUpdate(
            caseId,
            { $push: { person: savedPerson._id } },
            { new: true }
        )
            .populate("person")
            .exec();

        res.json({
            case: updatedCase,
            person: savedPerson,
        });
    } catch (err) {
        return res.status(400).json({
            error: "Error While Creating Person",
            message: err.message,
        });
    }
};


exports.updatePerson = async (req, res) => {
    try {
        const { personId, name, description, profession } = req.body;
        const files = req.files;
        let fileUrl;
        if (files) {
            const displayFile=files.displayFile;
            const media_type = req.files.displayFile.mimetype;
            const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
            fileUrl = file.secure_url;
        }

        let updateFields = {
            name: name,
            description: description,
            profession: profession
        };

        if (fileUrl) {
            updateFields.image = fileUrl;
        }
        const updatedPerson = await Person.findByIdAndUpdate(personId, updateFields);
        res.json({
            person: updatedPerson,
        });
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({
            error: "Error While Updating Person",
            message: err.message,
        });
    }
};

exports.deletePerson = async (req, res) => {

    const { caseId,personId } = req.body;

    const person = await Person.findById(personId);

    if (!person) {
        console.log("Person not found");
        return;
    }

    
    try {
        const caseObj = await Case.findByIdAndUpdate(
            caseId,
            { $pull: { person: personId } },
            { new: true }
        );
        console.log("Case updated:", caseObj);
    } catch (error) {
        console.error("Error updating case:", error);
    }

    try {
        const deletedPerson = await Person.findByIdAndDelete(personId);
        console.log("Deleted person:", deletedPerson);
        res.json({ success: true, message: "Deleted Person successfully" });
    } catch (error) {
        console.error("Error deleting person:", error);
    }

}