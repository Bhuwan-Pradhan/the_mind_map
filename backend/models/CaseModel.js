// Import the Mongoose library
const mongoose = require("mongoose");


const caseSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
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
        clue: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "clue",
			},
		],
        person: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "person",
			},
		],



	},
	{ timestamps: true }

);


module.exports = mongoose.model("case", caseSchema);