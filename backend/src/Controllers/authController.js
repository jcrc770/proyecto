import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getUsuarioByUsername } from './usuariosController.js'
import UsuariosRepository from '../Repositories/usuariosRepository.js'

const usuariosRepository = new UsuariosRepository()

export const login = async (req, res) => {
  const { usuario, password } = req.body;
  console.log("@@@ AuthController ", req.body);
  try {
    const data = await usuariosRepository.getUsuarioByUsername(usuario);
    if (!data) {
      return res.status(401).json({
        error: true,
        message: 'El usuario no existe'
      });
    }

    const isValid = await bcrypt.compare(password, data.password);
    if (!isValid) {
      return res.status(401).json({
        error: true,
        message: 'La contraseña es incorrecta'
      });
    }

    const token = jwt.sign(
      {
        userId: data.id,       
        rol: data.rol          
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    console.log('token: ', token);
    
    // Devuelve el token y el rol
    return res.json({
      token,
      rol: data.rol
    });
  } catch (error) {
    res.status(401).json({
      error: true,
      message: 'Error: ' + error.message
    });
  }
};



export const logout = (req, res) => {
  try {
    // Borrar el token en las cookies (si está almacenado ahí)
    res.clearCookie('token'); // Asumiendo que el token se guarda bajo la clave 'token'
    
    res.json({
      error: false,
      message: 'Sesión cerrada con éxito'
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error al cerrar sesión: ' + error.message
    });
  }
};
