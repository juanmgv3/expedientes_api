import { RequestHandler } from "express";
import { Profesor } from "../models/profesor";
import { CentroInvestigacion } from "../models/centro_investigacion";


export const consultarProfesores:RequestHandler = async(req,res)=>{
    await Profesor.findAll({include:['centrosInvestigacion']}).then((profesores)=>{
        return res.status(200).json({data:profesores});
    }).catch((error)=>{
        return res.status(500).json({message:"Error al consultar los profesores",error});
    });
}

export const obtenerProfesoresConCentrosInvestigacion: RequestHandler = async (req, res) => {
    const profesores = await Profesor.findAll({ 
        include: [
            { 
                model: CentroInvestigacion,
                through: { attributes: [] }  // Evita incluir los atributos/columnas de la tabla intermedia
            }
        ]
    });
    return res.status(200).json(profesores);
}