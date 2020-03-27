import { Router } from 'express'
import { MessageController } from '../controllers'

const routes = Router()

routes.get('/', MessageController.getAll)

export default routes
