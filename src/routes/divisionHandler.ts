import {Router} from "express";
import { test, getDivisiones, crearDivision, actualizarDivision } from "../controllers/divisionesController";

const divisionRouter = Router();

divisionRouter.get('/test',test);
divisionRouter.get('/', getDivisiones);
divisionRouter.post('/', crearDivision);
divisionRouter.put('/:id', actualizarDivision);



export default divisionRouter;