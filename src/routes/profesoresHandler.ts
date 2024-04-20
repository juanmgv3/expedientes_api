import {Router} from "express";

import { consultarProfesores } from "../controllers/profesoresController";

const profesoresRouter = Router();

profesoresRouter.get('/',consultarProfesores);

export default profesoresRouter;