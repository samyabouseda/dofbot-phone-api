import { Schema, model } from 'mongoose'

const schema = new Schema({
	text: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		required: true,
	}
})

const Message = model('Message', schema)

export default Message
