import { RequestHandler } from "express";
import { Division } from "../models/division";
import {Op} from 'sequelize';
import { Departamento } from "../models/departamento";

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
    const divisiones = await Division.findAll({include:['departamentos']});

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

export const obtenerDivision:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    const division = await Division.findByPk(id);
    if(!division){
        return res.status(404).json({message:"División no encontrada"});
    }
    return res.status(200).json(division);
}

export const buscarDivision:RequestHandler = async (req,res)=>{
    const {term} = req.params;
    const divisiones = await Division.findAll({
        where:{
            nombre:{
                [Op.like]:`%${term}%`
            }
        }
    });
    return res.status(200).json({
        message:`Se encontraron ${divisiones.length} coincidencias para \'${term}\'`,
        data:divisiones
    });

}

export const crearDepartamentoAsociado:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    const division = await Division.findByPk(id);
    if(!division){
        return res.status(404).json({message:"La división no existe"});
    }

    const departamento = await Departamento.create({
        nombre:req.body.nombre,
        Divisiones_idDivisiones:id
    }).then((departamento)=>{
        return res.status(200).json({message:"Departamento creado",data:departamento}); 
    }).catch((error)=>{
        return res.status(400).json({message:"Error al crear el departamento",error:error.message});
    });
}