import {Router} from "express";
import { crearUsuario, actualizarUsuario } from '../controllers/usuariosController';



const usuariosRouter = Router();


usuariosRouter.post('/',crearUsuario);
usuariosRouter.put('/:id',actualizarUsuario);

export default usuariosRouter;