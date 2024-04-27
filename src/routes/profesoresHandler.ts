import {Router} from "express";

import { consultarProfesores } from "../controllers/profesoresController";
import { verifyToken } from "../middleware/verify_token";

const profesoresRouter = Router();

profesoresRouter.get('/',verifyToken,consultarProfesores);

export default profesoresRouter;