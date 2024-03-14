import express from "express";
import { connectDatabase } from "./database/db.js";

const app = express();
const port = 3003
app.use(express.json())

app.get('/', (req, res) => res.json('Hello world'));

connectDatabase()
    .then(() => {

        app.listen(port, () => 
            console.log('Servidor e banco de dados rodando na porta:', port)
        );

    })
    .catch((e) => console.log(e));

