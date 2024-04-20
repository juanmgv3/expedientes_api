import { Sequelize } from "sequelize-typescript";
import { Division } from "../models/division";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const db = process.env.DB_NAME;
const host = process.env.DB_HOST;



const connection = new Sequelize({
    dialect: "mysql",
    host:host,
    username: user,
    password: pass,
    database: db,
    logging: (...msg)=>console.log(msg),
    port: 33062,
    models: [Division]
});

export default connection;