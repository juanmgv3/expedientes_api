import {Router} from "express";
import { crearDepartamento } from "../controllers/departamentosController";

const departamentoRouter = Router();

departamentoRouter.post('/',crearDepartamento);


export default departamentoRouter;