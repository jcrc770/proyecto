import express from 'express'
import {
  createRenta,
  getAllRentas,
  getRentaById,
  updateRenta,
  deleteRenta
} from '../Controllers/rentasController.js'

const router = express.Router()

router.post('/create', createRenta)
router.get('/', getAllRentas)
router.get('/:id', getRentaById)
router.put('/update/:id', updateRenta)
router.delete('/delete/:id', deleteRenta)

export default router