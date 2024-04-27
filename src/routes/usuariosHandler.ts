import {Router} from "express";
import { crearUsuario, actualizarUsuario, listarUsuarios, eliminarUsuario } from '../controllers/usuariosController';



const usuariosRouter = Router();

usuariosRouter.get('/',listarUsuarios);
usuariosRouter.post('/',crearUsuario);
usuariosRouter.put('/:id',actualizarUsuario);
usuariosRouter.delete('/:id',eliminarUsuario);

export default usuariosRouter;