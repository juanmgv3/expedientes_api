import { RequestHandler } from "express";
import bcrypt from 'bcrypt';
import { Usuario } from "../models/usuario";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const secreto = process.env.APP_SECRET;

export const login:RequestHandler = async (req,res)=>{

    
    const {correo,password} = req.body;


    const usuario = await Usuario.findOne({where:{correo:correo}});

    if(!usuario){
        return res.status(404).json({message:"Usuario no existe"});
    }

    const passwordCorrecta = await bcrypt.compareSync(password,usuario.password);

    if(!passwordCorrecta){
        return res.status(401).json({message:"Contraseña incorrecta"});
    }

    const token = jwt.sign({
        id: usuario.idUsuarios,
        correo: usuario.correo,
        nombre: usuario.nombre
    },"palabraSecreta",{expiresIn:'10m'});

    return res.status(200).json({message:"Token generado",token:token,expiresIn:"10m"});


};