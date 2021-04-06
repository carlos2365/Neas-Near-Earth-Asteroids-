import { Router } from 'express'
const router = Router()

import * as neasCtrl from '../controllers/neas.controller'
import { authJwt } from '../middlewares'


router.post('/', [authJwt.verifyToken, authJwt.isModerator], neasCtrl.createNeas);

router.get('/', neasCtrl.getNeas);

router.get('/:neasId', neasCtrl.getNeasById);

router.put('/:neasId', [authJwt.verifyToken, authJwt.isAdmin], neasCtrl.updateNeasById);

router.delete('/:neasId', [authJwt.verifyToken, authJwt.isAdmin], neasCtrl.deleteNeasById);


export default router;