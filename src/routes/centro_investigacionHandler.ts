import { Router } from "express";
import { obtenerCentrosDeInvestigacion, obtenerCentroDeInvestigacion,actualizarCentro_Investigacion, eliminarCentroDeInvestigacion, crearCentroDeInvestigacion } from "../controllers/centro_investigacionController";

const centro_investigacionRouter = Router();//definir la ruta

http://localhost:{{ _.puerto }}/centro_investigacion/
centro_investigacionRouter.get('/', obtenerCentrosDeInvestigacion);
centro_investigacionRouter.get('/:id', obtenerCentroDeInvestigacion);
centro_investigacionRouter.put('/:id',actualizarCentro_Investigacion);
centro_investigacionRouter.post('/', crearCentroDeInvestigacion);
centro_investigacionRouter.delete('/:id', eliminarCentroDeInvestigacion);


export default centro_investigacionRouter; 


