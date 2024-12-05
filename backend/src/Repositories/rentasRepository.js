import db from '../Config/firebase.js';
import RentasModelos from '../Models/rentasModel.js';

class RentasRepository {
  async createRenta(data) {
    const renta = await db.collection('rentas').add({
      nombre: data.nombre,
      telefono: data.telefono,
      direccion: data.direccion,
      ciudad: data.ciudad,
      rlugar: data.rlugar,
      rfecha: data.rfecha,
      rhora: data.rhora,
      dlugar: data.dlugar,
      dfecha: data.dfecha,
      dhora: data.dhora,
      cardN: data.cardN,
      cardE: data.cardE,
      cardH: data.cardH,
      CVC: data.CVC,
      carroId: data.carroId,
      precioF: data.precioF
    });
    return renta.id;
  }

  async getAllRentas() {
    const docs = await db.collection('rentas').get();
    const rentas = [];
    docs.forEach((doc) => {
      const data = doc.data();
      rentas.push(new RentasModelos(
        doc.id,
        data.nombre,
        data.telefono,
        data.direccion,
        data.ciudad,
        data.rlugar,
        data.rfecha,
        data.rhora,
        data.dlugar,
        data.dfecha,
        data.dhora,
        data.cardN,
        data.cardE,
        data.cardH,
        data.CVC,
        data.carroId,
        data.precioF
      ));
    });
    return rentas;
  }

  async getRentaById(id) {
    const doc = await db.collection('rentas').doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    return new RentasModelos(
      doc.id,
      data.nombre,
      data.telefono,
      data.direccion,
      data.ciudad,
      data.rlugar,
      data.rfecha,
      data.rhora,
      data.dlugar,
      data.dfecha,
      data.dhora,
      data.cardN,
      data.cardE,
      data.cardH,
      data.CVC,
      data.carroId,
      data.precioF
    );
  }

  async updateRenta(id, data) {
    await db.collection('rentas').doc(id).update(data);
  }

  async deleteRenta(id) {
    await db.collection('rentas').doc(id).delete();
  }
}

export default RentasRepository;
