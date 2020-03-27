import { Router } from 'express'
import { OK } from 'http-status-codes'
import messageRoutes from './message-routes'
import webhooksRoutes from './webhooks-routes'
const router = Router()

router.use('/messages', messageRoutes)
router.use('/webhooks/', webhooksRoutes)

router.get('/', (req, res) => {
	res.status(OK).json({ message: 'Connected' })
})

export default router
