const Case = require("../models/CaseModel");
const User = require("../models/UserModel");
const { uploadMediaToCloudinary } = require('./FileUploader');
exports.addCase = async (req, res) => {
    try {
        // fetch data from request body 
        const { name, description,place } = req.body;
        const user = req.user.id;
        const displayFile = req.files.displayFile;
        const media_type = req.files.displayFile.mimetype;
        console.log(media_type)
        const file = await uploadMediaToCloudinary(displayFile, process.env.FOLDER_NAME, media_type);
      
        const newCase = new Case({
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