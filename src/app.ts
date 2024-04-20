import express from 'express';
import connection from "./db/config";
import divisionRouter from "./routes/divisionHandler";
import {json, urlencoded} from 'body-parser';
import dotenv from 'dotenv';
import departamentoRouter from './routes/departamentoHandler';
import profesoresRouter from './routes/profesoresHandler';


const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hola diplomado en desarrollo web!!!');
});


app.use('/division',divisionRouter);
app.use('/departamento',departamentoRouter);
app.use('/profesores',profesoresRouter);

connection.sync().then(()=>{
    console.log("La base de datos funciona");
}).catch((error)=>{
    console.log("error en la db ",error);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

