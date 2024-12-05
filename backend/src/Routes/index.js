import {Router} from 'express'
import userRoutes from '../Routes/userRoutes.js'
import carroRoutes from './carroRoutes.js'
// import facturaRoutes from './facturaRoutes.js'
// import pagoRoutes from './pagoRoutes.js'
import rentaRoutes from './rentaRoutes.js'
import authRoutes from './authRoutes.js' 
 
const router = Router()

router.use('/usuarios', userRoutes)
router.use('/carros', carroRoutes)
// router.use('/facturas', facturaRoutes)
// router.use('/pagos', pagoRoutes)
router.use('/rentas', rentaRoutes)
router.use('/usuarios/auth', authRoutes)

export default router
