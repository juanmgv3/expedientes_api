import { RequestHandler } from "express";
import { Division } from "../models/division";

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