import { Router } from 'express'


const router = Router()
import * as authCrlt from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', 
[verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], 
authCrlt.signUp
);

router.post('/signin', authCrlt.signIn)

export default router;