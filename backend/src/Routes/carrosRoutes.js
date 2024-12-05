import express from 'express'
import {
  createCarro,
  getAllCarros,
  getCarroById, 
  updateCarro,
  deleteCarro
} from '../Controllers/carrosController.js'

const router = express.Router()

router.post('/create', createCarro)
router.get('/', getAllCarros)
router.get('/:id', getCarroById)
router.put('/update/:id', updateCarro)
router.delete('/delete/:id', deleteCarro)

export default router 