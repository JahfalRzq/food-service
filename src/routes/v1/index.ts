import { Router } from 'express'
import RouteAuth from './authRouter'
import RouteUserSeeder from './userSeederRoute'
import RouteUserManagementAdmin from './userManagementdminRouter'
import { checkJwt } from '../../utils/checkJwt'









const router = Router()

router.use('/auth', RouteAuth)
router.use('/seeder',RouteUserSeeder)
router.use('/userManagementAdmin',RouteUserManagementAdmin)




export default router

