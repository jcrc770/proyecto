import PagosRepository from '../Repositories/pagosRepository.js';

class PagosService {
  constructor() {
    this.pagosRepo = new PagosRepository();
  }

  // Crear un nuevo pago
  async createPago(data) {
    try {
      // Aquí podrías realizar validaciones adicionales si lo necesitas
      return await this.pagosRepo.createPago(data);
    } catch (error) {
      throw new Error('Error al crear pago: ' + error.message);
    }
  }

  // Obtener todos los pagos
  async getAllPagos() {
    try {
      return await this.pagosRepo.getAllPagos();
    } catch (error) {
      throw new Error('Error al obtener pagos: ' + error.message);
    }
  }

  // Obtener pago por ID
  async getPagoById(id) {
    try {
      const pago = await this.pagosRepo.getPagoById(id);
      if (!pago) {
        throw new Error('Pago no encontrado');
      }
      return pago;
    } catch (error) {
      throw new Error('Error al obtener pago: ' + error.message);
    }
  }

  // Actualizar pago
  async updatePago(id, data) {
    try {
      await this.pagosRepo.updatePago(id, data);
    } catch (error) {
      throw new Error('Error al actualizar pago: ' + error.message);
    }
  }

  // Eliminar pago
  async deletePago(id) {
    try {
      await this.pagosRepo.deletePago(id);
    } catch (error) {
      throw new Error('Error al eliminar pago: ' + error.message);
    }
  }
}

export default PagosService;
