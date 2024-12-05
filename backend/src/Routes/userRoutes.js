import express from 'express'
import authMiddleware from '../Middleware/authMiddleware.js'
import {check} from 'express-validator'
import {
createUsuario,
updateUsuario,
deleteUsuario,
getAllUsuarios, 

getUsuarioById,
getUsuarioByUsername,
getUsuarioByRol
} from '../Controllers/usuariosController.js'
 
const router = express.Router()
 
router.post(
    '/create',
    [
        check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
        check('usuario').notEmpty().withMessage('El username es obligatorio'),
        check('password').isLength({min: 6}).withMessage('La contraseña es obligatoria')
 
    ],createUsuario
)
 
router.put('/update/:id',authMiddleware, updateUsuario)
router.delete('/delete/:id',deleteUsuario)
router.get('/',authMiddleware,getAllUsuarios)
router.get('/:id',authMiddleware,getUsuarioById)
router.get('/rol/:rol',authMiddleware,getUsuarioByRol)
router.get('/usuario/:usuario',getUsuarioByUsername)
 
export default router