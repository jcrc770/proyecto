import RentasRepository from '../Repositories/rentasRepository.js';

class RentasService {
  constructor() {
    this.rentasRepo = new RentasRepository();
  }

  // Crear una nueva renta
  async createRenta(data) {
    try {
      // Aquí podrías realizar validaciones adicionales si lo necesitas
      return await this.rentasRepo.createRenta(data);
    } catch (error) {
      throw new Error('Error al crear renta: ' + error.message);
    }
  }

  // Obtener todas las rentas
  async getAllRentas() {
    try {
      return await this.rentasRepo.getAllRentas();
    } catch (error) {
      throw new Error('Error al obtener rentas: ' + error.message);
    }
  }

  // Obtener renta por ID
  async getRentaById(id) {
    try {
      const renta = await this.rentasRepo.getRentaById(id);
      if (!renta) {
        throw new Error('Renta no encontrada');
      }
      return renta;
    } catch (error) {
      throw new Error('Error al obtener renta: ' + error.message);
    }
  }

  // Actualizar renta
  async updateRenta(id, data) {
    try {
      await this.rentasRepo.updateRenta(id, data);
    } catch (error) {
      throw new Error('Error al actualizar renta: ' + error.message);
    }
  }

  // Eliminar renta
  async deleteRenta(id) {
    try {
      await this.rentasRepo.deleteRenta(id);
    } catch (error) {
      throw new Error('Error al eliminar renta: ' + error.message);
    }
  }
}

export default RentasService;
