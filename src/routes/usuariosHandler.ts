import {Router} from "express";
import { crearUsuario, actualizarUsuario, listarUsuarios, eliminarUsuario, exportarUsuarios } from '../controllers/usuariosController';



const usuariosRouter = Router();

usuariosRouter.get('/',listarUsuarios);
usuariosRouter.post('/',crearUsuario);
usuariosRouter.put('/:id',actualizarUsuario);
usuariosRouter.delete('/:id',eliminarUsuario);
usuariosRouter.get('/exportar',exportarUsuarios);

export default usuariosRouter;