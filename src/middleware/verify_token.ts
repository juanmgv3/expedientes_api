import * as jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import dotenv from 'dotenv';

const secreto = process.env.APP_SECRET || 'otroSecreto';

export const verifyToken:RequestHandler = (req,res,next)=>{

    const token = req.headers.authorization?.split(" ")[1];//separar por un espacio

    if(!token){
        return res.status(401).json({message:"El token es obligatorio"});
    }

    try{
        const data = jwt.verify(token,secreto);
        next();
    }catch(error){
        return res.status(401).json({message:"Token inválido"});
    }
};