import { RequestHandler } from "express";
import { Profesor } from "../models/profesor";


export const consultarProfesores:RequestHandler = async(req,res)=>{
    await Profesor.findAll({include:['centrosInvestigacion']}).then((profesores)=>{
        return res.status(200).json({data:profesores});
    }).catch((error)=>{
        return res.status(500).json({message:"Error al consultar los profesores",error});
    });
}