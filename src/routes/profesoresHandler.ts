import {Router} from "express";

import { obtenerProfesoresConCentrosInvestigacion } from "../controllers/profesoresController";
import { consultarProfesores } from "../controllers/profesoresController";
import { verifyToken } from "../middleware/verify_token";

const profesoresRouter = Router();

profesoresRouter.get('/',verifyToken,consultarProfesores);
profesoresRouter.get('/obtenerProfesoresConCentroDeInvestigacion', obtenerProfesoresConCentrosInvestigacion);

export default profesoresRouter;