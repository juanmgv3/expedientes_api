import {Router} from "express";
import { test, getDivisiones, crearDivision, actualizarDivision, obtenerDivision, buscarDivision, crearDepartamentoAsociado } from "../controllers/divisionesController";

const divisionRouter = Router();

divisionRouter.get('/test',test);
divisionRouter.get('/', getDivisiones);
divisionRouter.post('/', crearDivision);
divisionRouter.put('/:id', actualizarDivision);
divisionRouter.get('/:id', obtenerDivision);
divisionRouter.get('/buscar/:term', buscarDivision);
divisionRouter.post('/:id/crear_departamento', crearDepartamentoAsociado);



export default divisionRouter;