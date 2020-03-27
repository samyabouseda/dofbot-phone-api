import {
	CREATED,
	INTERNAL_SERVER_ERROR,
	OK,
	NO_CONTENT,
} from 'http-status-codes'

// const handleInboundSms = async (req, res) => {
// 	try {
// 		const message = await req.context.models.Message.create({
// 			text: req.body.text,
// 			phone: req.body.to,
// 		})
// 		return res.status(CREATED).json({
// 			message,
// 		})
// 	} catch (error) {
// 		return res
// 			.status(INTERNAL_SERVER_ERROR)
// 			.json({ error: error.message })
// 	}
// }

const handleInboundSms = async (request, response) => {
  const params = Object.assign(request.query, request.body)
  const { to, text, msisdn } = params
  if (text !== undefined) {
    const message = await request.context.models.Message.create({
      text: text,
      to: to,
      timestamp: Date.now(),
    })
    console.log(message)
  } else {
    console.log("empty request")
  }
  response.status(200).send()
}

export default {
	handleInboundSms,
}

// {
//   msisdn: 'Google',
//   to: '447507327799',
//   messageId: '170000026E5733DB',
//   text: 'G-023493 est votre code de validation Google.',
//   type: 'text',
//   keyword: 'G-023493',
//   'api-key': '97d8ee9f',
//   'message-timestamp': '2020-03-27 12:22:26'
// }
