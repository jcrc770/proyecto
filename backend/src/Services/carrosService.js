import CarrosRepository from '../Repositories/carrosRepository.js';

class CarrosService {
  constructor() {
    this.carrosRepo = new CarrosRepository();
  }

  // Crear un nuevo carro
  async createCarro(data) {
    try {
      // Aquí podrías realizar validaciones adicionales si lo necesitas
      return await this.carrosRepo.createCarro(data);
    } catch (error) {
      throw new Error('Error al crear carro: ' + error.message);
    }
  }

  // Obtener todos los carros
  async getAllCarros() {
    try {
      return await this.carrosRepo.getAllCarros();
    } catch (error) {
      throw new Error('Error al obtener carros: ' + error.message);
    }
  }

  // Obtener carro por ID
  async getCarroById(id) {
    try {
      const carro = await this.carrosRepo.getCarrosById(id);
      if (!carro) {
        throw new Error('Carro no encontrado');
      }
      return carro;
    } catch (error) {
      throw new Error('Error al obtener carro: ' + error.message);
    }
  }

  // Actualizar carro
  async updateCarro(id, data) {
    try {
      await this.carrosRepo.updateCarro(id, data);
    } catch (error) {
      throw new Error('Error al actualizar carro: ' + error.message);
    }
  }

  // Eliminar carro
  async deleteCarro(id) {
    try {
      await this.carrosRepo.deleteCarro(id);
    } catch (error) {
      throw new Error('Error al eliminar carro: ' + error.message);
    }
  }
}

export default CarrosService;
