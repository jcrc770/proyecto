import jwt from "jsonwebtoken";
import dotenv from "dotenv";

 
dotenv.config();
 
const authMiddleware = (request, response, next) => {
  const authHeader = request.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return response.status(401).json({ message: 'Invalid Authorization Header' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded; // Agregamos los datos del token al objeto request
    next();
  } catch (error) {
    const message = error.name === 'TokenExpiredError' ? 'Token Expired' : 'Invalid Token'; 
    return response.status(401).json({ message });
  }
};
 
export default authMiddleware;

