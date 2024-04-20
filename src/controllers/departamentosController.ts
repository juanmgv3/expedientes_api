import { RequestHandler } from "express";
import { Departamento } from "../models/departamento";
import { Division } from "../models/division";


export const crearDepartamento:RequestHandler = async (req,res)=>{
    const division = await Division.findByPk(req.body.idDivisiones).then(async(division)=>{
        if(!division){
            return res.status(404).json({message:"Esa división no existe"});
        }

        const departamento = await Departamento.create({
            nombre:req.body.nombre,
            Divisiones_idDivisiones:division.idDivisiones
        }).then((Departamento)=>{
            return res.status(200).json({message:"Departamento creado exitosamente",data:Departamento});
        }).catch((error)=>{
            return res.status(500).json({message:"Error al crear el departamento",error});
        });
    });
}