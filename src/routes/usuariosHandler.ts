import {Router} from "express";
import { crearUsuario, actualizarUsuario, listarUsuarios } from '../controllers/usuariosController';



const usuariosRouter = Router();

usuariosRouter.get('/',listarUsuarios);
usuariosRouter.post('/',crearUsuario);
usuariosRouter.put('/:id',actualizarUsuario);

export default usuariosRouter;