import {
	CREATED,
	INTERNAL_SERVER_ERROR,
	OK,
	NO_CONTENT,
} from 'http-status-codes'

const getAll = async (req, res) => {
	const messages = await req.context.models.Message.find()
	return res.send(messages)
}

export default {
	getAll,
}
