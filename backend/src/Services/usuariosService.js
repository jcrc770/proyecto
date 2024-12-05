import UsuariosRepository from '../Repositories/usuariosRepository.js';
import bcrypt from 'bcrypt';

class UsuariosService {
  constructor() {
    this.usuariosRepo = new UsuariosRepository();
  }

  // Crear un nuevo usuario
  async createUsuario(data) {
    console.log('usuario: ', data)
    try {
      const { nombre, apaterno, amaterno, domicilio, telefono, email, usuario, password, rol } = data;

      // Hashear la contraseña antes de guardarla
      const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de "salt rounds"

      // Crear un nuevo objeto de usuario con la contraseña hasheada
      const newUser = {
        nombre,
        apaterno, 
        amaterno,
        domicilio,
        telefono,
        email,
        usuario,
        password: hashedPassword,
        rol,
      };

      // Pasar el usuario al repositorio para guardarlo
      return await this.usuariosRepo.createUsuario(newUser);
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  }

  // Obtener todos los usuarios
  async getAllUsuarios() {
    try {
      return await this.usuariosRepo.getAllUsuarios();
    } catch (error) {
      throw new Error('Error al obtener usuarios: ' + error.message);
    }
  }

  // Obtener usuario por ID
  async getUsuarioById(id) {
    try {
      const usuario = await this.usuariosRepo.getUsuarioById(id);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new Error('Error al obtener usuario: ' + error.message);
    }
  }

  // Obtener usuario por username
  async getUsuarioByUsername(usuario) {
    try {
      const data = await this.usuariosRepo.getUsuarioByUsername(usuario);
      if (!data) {
        throw new Error('Usuario no encontrado');
      }
      return data;
    } catch (error) {
      throw new Error('Error al obtener usuario por nombre de usuario: ' + error.message);
    }
  }

    // Obtener usuarios por rol
    async getUsuarioByRol(rol) {
      try {
        const usuarios = await this.usuariosRepo.getUsuarioByRol(rol);
        if (usuarios.length === 0) {
          throw new Error('No se encontraron usuarios con ese rol');
        }
        return usuarios;
      } catch (error) {
        throw new Error('Error al obtener usuarios por rol: ' + error.message);
      }
    }

  // Actualizar usuario
  async updateUsuario(id, data) {
    try {
      await this.usuariosRepo.updateUsuario(id, data);
    } catch (error) {
      throw new Error('Error al actualizar usuario: ' + error.message);
    }
  }

  // Eliminar usuario
  async deleteUsuario(id) {
    try {
      await this.usuariosRepo.deleteUsuario(id);
    } catch (error) {
      throw new Error('Error al eliminar usuario: ' + error.message);
    }
  }
}

export default UsuariosService;
