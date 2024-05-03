import { RequestHandler } from "express";
import {CentroInvestigacion} from '../models/centro_investigacion';
import { Departamento } from "../models/departamento";

// GET
export const obtenerCentrosDeInvestigacion:RequestHandler = async (req, res) => {
    const centrosdeInvestigacion = await CentroInvestigacion.findAll(); 
    return res.status(200).json({msg: 'Lista de centros de investigación obtenida correctamente',centrosdeInvestigacion});
}

export const obtenerCentroDeInvestigacion:RequestHandler = async (req, res) => {
    const {id} = req.params;

    const centrodeInvestigacion:CentroInvestigacion | null = await CentroInvestigacion.findByPk(id);
    if (!centrodeInvestigacion) {
        return res.status(404).json({ message: "El Centro de Investigación no existe en la base de datos" });
    }

    return res.status(200).json({ message: "Centro de Investigación encontrado exitosamente", centrodeInvestigacion });
}

// PUT
export const actualizarCentro_Investigacion:RequestHandler = async (req, res) => {
    const {id} = req.params;
    await CentroInvestigacion.update({...req.body},{where:{idCentrosInvestigacion:id}});

    const centro_investigacionActualizado:CentroInvestigacion | null = await CentroInvestigacion.findByPk(id);
    if (!centro_investigacionActualizado) {
        return res.status(404).json({ message: "El Centro de Investigación no existe en la base de datos" });
    }

    return res.status(200).json({message:"Centro de Investigación actualizado ok!!", data:centro_investigacionActualizado});
}

//POST
//Debes asegurarte de que el valor que estás intentando insertar en Departamento_idDepartamento en la tabla CentrosInvestigacion existe en la tabla Departamento
export const crearCentroDeInvestigacion:RequestHandler = async (req, res) => {
    const centrodeInvestigacion = await CentroInvestigacion.create({
        Departamento_idDepartamento: req.body.Departamento_idDepartamento, 
        nombre: req.body.nombre
    });
    return res.status(200).json({msg: 'Operación exitosa. Centro de investigación creado correctamente', centrodeInvestigacion});
}

// DELETE
export const eliminarCentroDeInvestigacion: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const CentroDeInvestigacionExistente: CentroInvestigacion | null = await CentroInvestigacion.findByPk(id);
    if (!CentroDeInvestigacionExistente) {
        return res.status(404).json({ message: "El Centro de Investigación no existe en la base de datos" });
    }

    await CentroInvestigacion.destroy({ where: { idCentrosInvestigacion: id } });
    return res.status(200).json({ message: "Centro de Investigacion eliminado correctamente" });
}