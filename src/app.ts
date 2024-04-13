import express from 'express';
import connection from "./db/config";
import divisionRouter from "./routes/divisionHandler";
import {json, urlencoded} from 'body-parser';


const app = express();

app.use(json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hola diplomado en desarrollo web!!!');
});


app.use('/division',divisionRouter);

connection.sync().then(()=>{
    console.log("La base de datos funciona");
}).catch((error)=>{
    console.log("error en la db",error);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

