import PagosService from '../Services/pagosService.js';

class PagosController {
  constructor() {
    this.pagosService = new PagosService();
  }

  // Crear pago
  createPago = async (req, res) => {
    try {
      const id = await this.pagosService.createPago(req.body);
      res.status(201).json({
        message: 'Pago creado',
        id: id,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener todos los pagos
  getAllPagos = async (req, res) => {
    try {
      const pagos = await this.pagosService.getAllPagos();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener pago por ID
  getPagoById = async (req, res) => {
    try {
      const pago = await this.pagosService.getPagoById(req.params.id);
      if (!pago) {
        res.status(404).json({ message: 'Pago no encontrado' });
      } else {
        res.status(200).json(pago);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Actualizar pago
  updatePago = async (req, res) => {
    try {
      await this.pagosService.updatePago(req.params.id, req.body);
      res.status(200).json({ message: 'Pago actualizado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Eliminar pago
  deletePago = async (req, res) => {
    try {
      await this.pagosService.deletePago(req.params.id);
      res.status(200).json({ message: 'Pago eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const pagosController = new PagosController();

export const { createPago, getAllPagos, getPagoById, updatePago, deletePago } = pagosController;
