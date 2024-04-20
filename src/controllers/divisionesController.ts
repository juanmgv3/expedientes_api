import { RequestHandler } from "express";
import { Division } from "../models/division";

/**
 * Create -> crear un recurso (insert)
 * Read -> leer recursos (select)
 * Update -> actualiza un registro en la db (update)
 * Delete -> eliminar un registro (o varios) en la db (delete)
 */

export const test:RequestHandler = async (req,res)=>{
    return res.status(200).send("Hola desde división controller");
}

export const getDivisiones:RequestHandler = async (req,res)=>{
    const divisiones = await Division.findAll();

    return res.status(200).json(divisiones);
}

export const crearDivision:RequestHandler = async (req,res)=>{
    var division = await Division.create({
        nombre: req.body.nombre
    });

    return res.status(200).json(division);
}

export const actualizarDivision:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    await Division.update({...req.body},{where:{idDivisiones:id}});
    const divisionActualizada:Division | null = await Division.findByPk(id);
    return res.status(200)
    .json({message:"División actualizada ok",data:divisionActualizada});
}