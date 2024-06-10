import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController'
import { connect } from 'http2'

const router = new Router()

router.post('/session', SessionController.store)

export default router