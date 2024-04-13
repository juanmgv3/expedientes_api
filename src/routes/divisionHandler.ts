import {Router} from "express";
import { test, getDivisiones, crearDivision } from "../controllers/divisionesController";

const divisionRouter = Router();

divisionRouter.get('/test',test);
divisionRouter.get('/', getDivisiones);
divisionRouter.post('/', crearDivision);



export default divisionRouter;