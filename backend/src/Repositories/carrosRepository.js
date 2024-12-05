import db from '../Config/firebase.js';
import CarrosModel from '../Models/carrosModel.js';

class CarrosRepository {
  async createCarro(data){
    const carro = await db.collection('carros').add({
      marca: data.marca,
      modelo: data.modelo,
      year: data.year,
      tipo: data.tipo,
      capacidad: data.capacidad,
      direccion: data.direccion,
      gasolina: data.gasolina,
      precio: data.precio
    });
    return carro.id;
  }

  async getAllCarros(){
    const docs = await db.collection('carros').get();
    const carros = [];
    docs.forEach((doc) => {
      const data = doc.data();
      carros.push(new CarrosModel(
        doc.id, 
        data.marca, 
        data.modelo, 
        data.year, 
        data.tipo, 
        data.capacidad, 
        data.direccion,
        data.gasolina,
        data.precio
      ));
    });
    return carros;
  }

  async getCarrosById(id) {
    const doc = await db.collection('carros').doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    return new CarrosModel(
      doc.id, 
      data.marca, 
      data.modelo, 
      data.year, 
      data.tipo, 
      data.capacidad, 
      data.direccion,
      data.gasolina,
      data.precio
    );
  }

  async updateCarro(id, data) {
    await db.collection('carros').doc(id).update(data);
  }

  async deleteCarro(id) {
    await db.collection('carros').doc(id).delete();
  }
}

export default CarrosRepository;