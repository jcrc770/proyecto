import RentasService from '../Services/rentasService.js';

class RentasController {
  constructor() {
    this.rentasService = new RentasService();
  }

  // Crear renta
  createRenta = async (req, res) => {
    try {
      const id = await this.rentasService.createRenta(req.body);
      res.status(201).json({
        message: 'Renta creada',
        id: id,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener todas las rentas
  getAllRentas = async (req, res) => {
    try {
      const rentas = await this.rentasService.getAllRentas();
      res.status(200).json(rentas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener renta por ID
  getRentaById = async (req, res) => {
    try {
      const renta = await this.rentasService.getRentaById(req.params.id);
      if (!renta) {
        res.status(404).json({ message: 'Renta no encontrada' });
      } else {
        res.status(200).json(renta);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Actualizar renta
  updateRenta = async (req, res) => {
    try {
      await this.rentasService.updateRenta(req.params.id, req.body);
      res.status(200).json({ message: 'Renta actualizada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Eliminar renta
  deleteRenta = async (req, res) => {
    try {
      await this.rentasService.deleteRenta(req.params.id);
      res.status(200).json({ message: 'Renta eliminada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const rentasController = new RentasController();

export const { createRenta, getAllRentas, getRentaById, updateRenta, deleteRenta } = rentasController;
