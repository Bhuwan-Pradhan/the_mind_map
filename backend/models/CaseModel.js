// Import the Mongoose library
const mongoose = require("mongoose");


const caseSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
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
		image: {
			type: String,
			required: true,
		},
		place: {
			type: String,
			required: true,
		}



	},
	{ timestamps: true }

);


module.exports = mongoose.model("case", caseSchema);