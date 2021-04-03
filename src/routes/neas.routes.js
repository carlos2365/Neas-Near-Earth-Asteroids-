import { Router } from 'express'
const router = Router()

import * as neasCtrl from '../controllers/neas.controller'

router.post('/', neasCtrl.createNeas);

router.get('/', neasCtrl.getNeas);

router.get('/:neasId', neasCtrl.getNeasById);

router.put('/:neasId', neasCtrl.updateNeasById);

router.delete('/:neasId', neasCtrl.deleteNeasById);


export default router;