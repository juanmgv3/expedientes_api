import { Sequelize } from "sequelize-typescript";
import { Division } from "../models/division";

const connection = new Sequelize({
    dialect: "mysql",
    host:"localhost",
    username: "root",
    password: "hola123",
    database: "ExpedientesProfesores",
    logging: (...msg)=>console.log(msg),
    port: 33062,
    models: [Division]
});

export default connection;