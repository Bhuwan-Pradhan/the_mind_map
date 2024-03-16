// Import the Mongoose library
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
	{
		case: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "case",
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
		},
        description: {
            type: String,
            required: true,
        },
        profession: {
            type: String,
            required: true,
        },
	},
	{ timestamps: true }

);


module.exports = mongoose.model("person", personSchema);