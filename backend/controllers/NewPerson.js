const Case = require("../models/CaseModel");
const Person = require("../models/PersonModel");

const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addPerson = async (req, res) => {
    try {
        const { caseId, name, description, profession } = req.body;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        console.log(media_type)
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