import { Router } from 'express'
import { WebhookController } from '../controllers'

const routes = Router()

routes.post('/inbound-sms', WebhookController.handleInboundSms)
routes.get('/inbound-sms', WebhookController.handleInboundSms)

export default routes
