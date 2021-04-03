import { Router } from 'express'
const router = Router()
import * as authCrlt from '../controllers/auth.controller'

router.post('/signup', authCrlt.signUp)
router.post('/signin', authCrlt.signIn)

export default router;