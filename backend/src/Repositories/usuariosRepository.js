import db from '../Config/firebase.js';
import UsuariosModel from '../Models/usuariosModel.js';

class UsuariosRepository {
  async createUsuario(data){

    const usuario = await db.collection('usuarios').add({
      nombre: data.nombre,
      apaterno: data.apaterno,
      amaterno: data.amaterno,
      domicilio: data.domicilio,
      telefono: data.telefono,
      email: data.email,
      usuario: data.usuario,
      password: data.password,
      rol: data.rol
    });
    return usuario.id;
  }

  async getAllUsuarios() {
    const docs = await db.collection('usuarios').get();
    const usuarios = [];
    docs.forEach((doc) => {
      const data = doc.data();
      usuarios.push(new UsuariosModel(
        doc.id,
        data.nombre,
        data.apaterno,
        data.amaterno,
        data.domicilio,
        data.telefono,
        data.email,
        data.usuario,
        data.password
      ));
    });
    return usuarios;
  }

  async getUsuarioById(id) {
    const doc = await db.collection('usuarios').doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    return new UsuariosModel(
      doc.id,
      data.nombre,
      data.apaterno,
      data.amaterno,
      data.domicilio,
      data.telefono,
      data.email,
      data.usuario,
      data.password,
      data.rol
    );
  }

  async getUsuarioByUsername(usuario) {
    const query = await db.collection('usuarios').where('usuario', '==', usuario).get();
    if (query.empty) {
      return null;
    }
    const doc = query.docs[0];
    const data = doc.data();
    return new UsuariosModel(
      doc.id,
      data.nombre,
      data.apaterno,
      data.amaterno,
      data.domicilio,
      data.telefono,
      data.email,
      data.usuario,
      data.password,
      data.rol
    );
  }

  async getUsuarioByRol(rol) {
    const query = await db.collection('usuarios').where('rol', '==', rol).get();
    if (query.empty) {
      return []; // Retorna un arreglo vacío si no hay usuarios con ese rol
    }
    const usuarios = [];
    query.forEach((doc) => {
      const data = doc.data();
      usuarios.push(new UsuariosModel(
        doc.id,
        data.nombre,
        data.apaterno,
        data.amaterno,
        data.domicilio,
        data.telefono,
        data.email,
        data.usuario,
        data.password,
        data.rol 
      ));
    });
    return usuarios;
  }
  

  async updateUsuario(id, data) {
    await db.collection('usuarios').doc(id).update(data);
  }

  async deleteUsuario(id) {
    await db.collection('usuarios').doc(id).delete();
  }
}

export default UsuariosRepository;