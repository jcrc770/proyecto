import express from 'express';
import { login, logout } from '../Controllers/authController.js';

const authRouter = express.Router();

// Ruta para iniciar sesión
authRouter.post('/login', login);

// Ruta para cerrar sesión
authRouter.post('/logout', logout);

export default authRouter;
