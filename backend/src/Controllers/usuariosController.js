import UsuariosService from '../Services/usuariosService.js';
import jwt from 'jsonwebtoken';

class UsuariosController {
  constructor() {
    this.usuariosService = new UsuariosService();
  }

  // createUsuario = async (req, res) => {
  //   try {
  //     const id = await this.usuariosService.createUsuario(req.body);

  //     // Información que deseas incluir en el token
  //     const tokenPayload = {
  //       id: id,
  //       usuario: req.body.usuario,
  //       rol: req.body.rol, // Asegúrate de que el rol sea parte del body o usuario
  //     };

  //     // Generar el token con una duración de 1 hora
  //     const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
  //       expiresIn: "1h",
  //     });

  //     res.status(201).json({
  //       message: "Usuario creado",
  //       id: id,
  //       token, // Devuelve el token
  //     });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  //   // console.log('token: ', token)
  // };

  // Obtener todos los usuarios
  createUsuario = async (req, res) => {
    try {
      const id = await this.usuariosService.createUsuario(req.body);
  
      // Retornar solo el ID del usuario creado, sin generar un token
      res.status(201).json({
        message: "Usuario creado",
        id: id,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  getAllUsuarios = async(req, res) => {
    try {
      const usuarios = await this.usuariosService.getAllUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener usuario por ID
  getUsuarioById = async(req, res) => {
    try {
      const usuario = await this.usuariosService.getUsuarioById(req.params.id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

    // Obtener usuario por nombre de usuario
    getUsuarioByUsername = async (req, res) => {
      try {
        const usu = await this.usuariosService.getUsuarioByUsername(req.params.usuario);
        res.status(200).json(usu);
      } catch (error) {
        if (error.message === 'Usuario no encontrado') {
          res.status(404).json({ message: error.message });
        } else {
          res.status(500).json({ message: error.message });
        }
      }
    };

    getUsuarioByRol = async (req, res) => {
      try {
        const usuarios = await this.usuariosService.getUsuarioByRol(req.params.rol);
        res.status(200).json(usuarios);
      } catch (error) {
        if (error.message === 'No se encontraron usuarios con ese rol') {
          res.status(404).json({ message: error.message });
        } else {
          res.status(500).json({ message: error.message });
        }
      }
    };

  // Actualizar usuario
  updateUsuario = async (req, res) => {
    try {
      await this.usuariosService.updateUsuario(req.params.id, req.body);
      res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Eliminar usuario
  deleteUsuario = async (req, res) => {
    try {
      await this.usuariosService.deleteUsuario(req.params.id);
      res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const usuariosController = new UsuariosController();


export const { createUsuario, deleteUsuario, updateUsuario, getAllUsuarios, getUsuarioById, getUsuarioByUsername, getUsuarioByRol } = usuariosController;

 