const Case = require("../models/CaseModel");
const User = require("../models/UserModel");
exports.addCase = async (req, res) => {
    try {
        // fetch data from request body 
        const { name, description } = req.body;
        const user = req.user.id
        // create comment object
        const newCase = new Case({
            name, description
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