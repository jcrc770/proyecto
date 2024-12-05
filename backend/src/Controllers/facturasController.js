import FacturasService from '../Services/facturasService.js';

class FacturasController {
  constructor() {
    this.facturasService = new FacturasService();
  }

  // Crear factura
  createFactura = async (req, res) => {
    try {
      const id = await this.facturasService.createFactura(req.body);
      res.status(201).json({
        message: 'Factura creada',
        id: id,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener todas las facturas
  getAllFacturas = async (req, res) => {
    try {
      const facturas = await this.facturasService.getAllFacturas();
      res.status(200).json(facturas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener factura por ID
  getFacturaById = async (req, res) => {
    try {
      const factura = await this.facturasService.getFacturaById(req.params.id);
      if (!factura) {
        res.status(404).json({ message: 'Factura no encontrada' });
      } else {
        res.status(200).json(factura);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Actualizar factura
  updateFactura = async (req, res) => {
    try {
      await this.facturasService.updateFactura(req.params.id, req.body);
      res.status(200).json({ message: 'Factura actualizada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Eliminar factura
  deleteFactura = async (req, res) => {
    try {
      await this.facturasService.deleteFactura(req.params.id);
      res.status(200).json({ message: 'Factura eliminada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const facturasController = new FacturasController();

export const { createFactura, getAllFacturas, getFacturaById, updateFactura, deleteFactura } = facturasController;
