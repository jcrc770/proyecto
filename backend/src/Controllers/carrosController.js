import CarrosService from '../Services/carrosService.js';

class CarrosController {
  constructor() {
    this.carrosService = new CarrosService();
  }

  // Crear un carro
  createCarro = async (req, res) => {
    try {
      const carroId = await this.carrosService.createCarro(req.body);
      res.status(201).json({ message: 'Carro creado', id: carroId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener todos los carros
  getAllCarros = async (req, res) => {
    try {
      const carros = await this.carrosService.getAllCarros();
      res.status(200).json(carros);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener carro por ID
  getCarroById = async (req, res) => {
    try {
      const carro = await this.carrosService.getCarroById(req.params.id);
      res.status(200).json(carro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Actualizar carro
  updateCarro = async (req, res) => {
    try {
      await this.carrosService.updateCarro(req.params.id, req.body);
      res.status(200).json({ message: 'Carro actualizado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Eliminar carro
  deleteCarro = async (req, res) => {
    try {
      await this.carrosService.deleteCarro(req.params.id);
      res.status(200).json({ message: 'Carro eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const carrosController = new CarrosController();

export const { createCarro, getAllCarros, getCarroById, updateCarro, deleteCarro } = carrosController;
